import { json, type MetaFunction } from "@remix-run/node";
import { Form, Navigate, useActionData, useNavigate } from "@remix-run/react";
import { useState } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "Home" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const action = async ({ request }: { request: Request }) => {
  const form = await request.formData();
  const todo = String(form.get('todo'));
  return json({ todo: todo, editTodo: false });
}
export default function Index() {
  const actionData = useActionData<typeof action>();
  const [editTodo, setEditTodo] = useState<boolean>(actionData?.editTodo ? actionData?.editTodo : false);
  const [updatedTodo, setUpdatedTodo] = useState<string>('Lorem ipsum dolor sit, amet consectetur adipisicing elit. met consectetur adipisicing elit. met consectetur adipisicing elit.');
  const navigate = useNavigate();

  return <div className="h-screen grid">
    <div>
      <div className="bg-blue-700 py-4 px-2">
        <div id="navbar" className="flex justify-between text-white">
          <div id="logo" className="text-[16pt]">
            <p>Todo</p>
          </div>
          <div id="mainMenu" className="flex items-center w-auto gap-4">
            <a href="">Guide</a>
            <a href="">Rate us</a>
            <a href="">Statistics</a>
          </div>
          <div id="userProfileDropdown">
            <img
              src="https://img.freepik.com/premium-psd/smiling-3d-cartoon-man_975163-772.jpg?w=826"
              alt="GitHub Avatar"
              className="w-8 rounded-full border shadow-md"
            />
          </div>
        </div>
      </div>

      <div id="body" className="p-4  lg:px-[15%] md:px-[15%] xl:px-[15%]">
        <div id="body_header" className="flex justify-between p-2 pb-3 border-b mb-4">
          <p className="font-bold">Tasks</p>
          <button type="button" className=" rounded-md border px-2 bg-green-500 text-white hover:bg-green-600">+ New</button>
        </div>
        <div id="body_todoItems" className="grid grid-cols-1 gap-2">
          <div>
            <div id="todoItems_todo" className="rounded-md rounded-br-none border p-2 text-gray-600">
              <div className="flex justify-start gap-2.5">
                {!editTodo ?
                  <div className="border-r px-2 pr-2.5">
                    <input type="checkbox" className="cursor-pointer" />
                  </div>
                  : null}

                {!editTodo ?
                  <p>{updatedTodo}</p> :
                  <Form className="flex w-full" onSubmit={() => setEditTodo(false)}>
                    <input type="text" name="todo" onChange={(e: any) => setUpdatedTodo(e.target.value)} className="w-full border p-0.5 pr-2" value={updatedTodo} />
                    <button type="submit" className="md:hidden lg:hidden xl:hidden px-1 -ml-0.5 text-white text-sm rounded-r-md bg-green-600">edit</button>
                  </Form>
                }
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="border-t border-t-gray-100 py-0 -mt-2.5 flex text-[8pt] gap-1">
              <div className="border px-2">
                <button className="text-red-500">Del</button>
              </div>
              <div className="border px-2">
                <button className="text-blue-500" onClick={() => setEditTodo(true)}>Edit</button>
              </div>
            </div>
          </div>
        </div>
        {/* <button className="p-2 bg-blue-400 text-white rounded-md" onClick={() => navigate("/user/2")}>view user</button> */}
      </div>
    </div>
    {/* <div className="p">
      <div id="footer" className="py-4 bg-blue-600 bottom-0">
      </div>
    </div> */}
  </div>
}