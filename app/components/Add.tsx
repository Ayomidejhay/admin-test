import { GridColDef } from "@mui/x-data-grid";
import React from "react";

type Props = {
  slug: string;
  columns: GridColDef[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function Add(props: Props) {
  // TEST THE API

  // const queryClient = useQueryClient();

  // const mutation = useMutation({
  //   mutationFn: () => {
  //     return fetch(`http://localhost:8800/api/${props.slug}s`, {
  //       method: "post",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         id: 111,
  //         img: "",
  //         lastName: "Hello",
  //         firstName: "Test",
  //         email: "testme@gmail.com",
  //         phone: "123 456 789",
  //         createdAt: "01.02.2023",
  //         verified: true,
  //       }),
  //     });
  //   },
  //   onSuccess: () => {
  //     queryClient.invalidateQueries([`all${props.slug}s`]);
  //   },
  // });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //add new item
    // mutation.mutate();
    props.setOpen(false);
  };

  return (
    <div className="w-[100vw] h-[100vh] absolute top-0 left-0 bg-[rgba(0,0,0,0.724)] flex items-center justify-center">
      <div className="!p-12.5 rounded-[10px] bg-mainBg relative">
        <span
          className="absolute top-2.5 right-2.5 cursor-pointer"
          onClick={() => props.setOpen(false)}
        >
          X
        </span>
        <h1 className="!mb-10 !text-2xl text-soft">Add new {props.slug}</h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-wrap max-w-[500px] justify-between"
        >
          {props.columns
            .filter((item) => item.field !== "id" && item.field !== "img")
            .map((column) => (
              <div className="w-[40%] flex flex-col gap-2.5 !mb-5">
                <label className="!text-[14px]">{column.headerName}</label>
                <input
                  className="!p-2.5 bg-transparent text-white outline-0 border border-solid border-soft rounded-[3px]"
                  type={column.type}
                  placeholder={column.field}
                />
              </div>
            ))}
          <button className="w-full !p-2.5 cursor-pointer bg-white text-black">Send</button>
        </form>
      </div>
    </div>
  );
}

export default Add;
