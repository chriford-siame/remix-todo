import {redirect, useLoaderData, useNavigate } from "@remix-run/react";

export const action = async ({ request }: { request: Request }) => {
}

export const loader = async ({ params }: { params: { id: string } }) => {
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