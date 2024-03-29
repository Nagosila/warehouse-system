<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Category;
use Illuminate\Support\Facades\Validator;

class CategoryController extends Controller
{
  public function index(Request $request)
  {   

    $category = Category::all(); 
    return $category;
 
  
 
  }

  public function edit($id)
  {   

    $category = Category::find($id); 
    if($category)
    {
      return response()->json([
        'status'=>200,
        'category'=>$category
      ]);
    }
    else
    {
      return response()->json([
        'status'=>400,
        'message'=>'Not found'
      ]);
    }
  }

     
    public function store (Request $request)
    {
         $validator = Validator::make($request->all(), [
             'meta_title'=>'required|max:191',
             'slug'=>'required|max:191',
             'name'=>'required|max:191',
             
         ]);
         if($validator->fails())
          {
            return response()->json([
                'status'=>400,
                'errors'=>$validator->messages(),

            ]);
          }
         else 
         {

         $category = new Category;
         $category ->meta_title = $request->input('meta_title');
         $category ->meta_keyword = $request->input('meta_keyword');
         $category ->meta_descrip = $request->input('meta_descrip');
         $category ->slug = $request->input('slug');
         $category ->name = $request->input('name');
         $category ->description = $request->input('description');
         $category ->status = $request->input('status') == true ? '1':'0';
         $category ->save();
          return response()->json([
              'status'=>200,
              'message'=>'Category Added',            
            ]);
          }  
    }


    public function update(Request $request,$id)
    {
      $validator = Validator::make($request->all(), [
          'meta_title'=>'required|max:191',
          'slug'=>'required|max:191',
          'name'=>'required|max:191',
          
      ]);
      if($validator->fails())
       {
         return response()->json([
             'status'=>422,
             'errors'=>$validator->messages(),

         ]);
       }
      else 
      {

      $category = Category::find($id);
      if($category)
      {
      $category ->meta_title = $request->input('meta_title');
      $category ->meta_keyword = $request->input('meta_keyword');
      $category ->meta_descrip = $request->input('meta_descrip');
      $category ->slug = $request->input('slug');
      $category ->name = $request->input('name');
      $category ->description = $request->input('description');
      $category ->status = $request->input('status') == true ? '1':'0';
      $category ->save();
       return response()->json([
           'status'=>200,
           'message'=>'Category Updated',            
         ]);
        }
        else
        {
          return response()->json([
            'status'=>400,
            'message'=>'ID NOT FOUND',            
          ]);
        }
       }  
 }
 public function destroy ($id)
 {
   $category = Category::find($id);
   if($category)
   {
     $category->delete();
    return response()->json([
      'status'=>200,
      'message'=>'Category Deleted',            
    ]);
   }
   else
   {
    return response()->json([
      'status'=>404,
      'message'=>'No Category Founded',            
    ]);
   }
 }
}
