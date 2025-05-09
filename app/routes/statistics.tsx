import { Form, redirect, useLoaderData, useNavigate } from "@remix-run/react";

export const action = async ({ request }: { request: Request }) => {
  /*"Documentation here ...."*/

  const profileFormData = await request.formData();
  
  const first_name = profileFormData.get("first_name") as string;
  const last_name = profileFormData.get("last_name") as string;
  
  console.log("First Name: ", first_name);
  console.log("Last Name: ", last_name);
}

export const loader = async ({ params }: { params: { id: string } }) => {
  console.log(params)
  if (parseInt(params.id) == 0) {
    return redirect('/');
  }
  return params;
}
export default function Statistics() {
  const navigate = useNavigate();
  const params = useLoaderData<{id: string}>();
  return (
    <div className="">
      <p>Statistics: {params.id}</p>

    </div>
  )
}