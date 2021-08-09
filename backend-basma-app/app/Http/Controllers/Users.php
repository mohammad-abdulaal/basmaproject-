<?php


namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use phpDocumentor\Reflection\Types\Float_;
use Illuminate\Support\Facades\Storage;
// use App\User;
use Illuminate\Support\Facades\URL;

class Users extends Controller
{
    public function login(Request $request)
    {
        $user = User::where('email', $request->email)->first();
        if ($user) {
            if (Hash::check($request->password, $user->password ) && $user->is_approved==1) {
                $token = $user->createToken('Laravel Password Grant Client')->accessToken;
                $response = ['token' => $token];
                return response($response, 200);

            }
            } else if ( $user->is_approved==0) {
                $response = ["message" => "still not approved"];
                return response($response, 422);
            } else {
            $response = ["message" => 'User does not exist'];
            return response($response, 422);}
    }
    public function signup(Request $request){
        $request->validate([
            'first_name' => 'required|string',
            'last_name' => 'required|string',
        'email' => 'required|string|email|unique:users'
        ]);
        $user=new User([
            'first_name'=>$request->first_name,
            'last_name'=>$request->last_name,
            'email'=>$request->email,
            'password'=>bcrypt($request->password),
            'is_approved'=>$request->is_approved=0,
        ]);
        $user->save();
        return response()->json([
            'message'=>'Successfully created !'
        ],201);

    }
    public function user() {
        $u =  User::where('email' , auth('api')->user()->email) ->first();
        return response()->json($u ,  200);
    }
    public function get(){
        $res = [
            'all' => [],
        ];
        $users = User::get();

        foreach($users as $key => $user) {
            $res['all'][$key] = [
                'id' => $user->id,
                "first_name"=>$user->first_name,
                "last_name"=>$user->last_name,
                "email"=>$user->email,
                "is_approved"=>$user->is_approved,

            ];
        }
        return response()->json($res);
    }
    public function approve(Request $request)
    {
        $user=User::find($request->user_id);
        $user->is_approved=1;
        $user->save();

        return response()->json([
            'message'=>'Successfully updated !'
        ],201);
    }
    public function delete($id){
        $res = User::destroy($id);
        return response()->json($res);
    }
    public function logout(Request $request)
    {
        $request->user()->token()->revoke();
        return response()->json([
            'message' => 'Successfully logged out'
        ]);
    }
    public function getusersnumber()
    {
        $users=User::count();
        return response()->json([
            'message'=>$users
        ]);
    }

}
