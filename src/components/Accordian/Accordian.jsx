import React, { useState } from "react";
import data from "./data";

const Accordian = () => {
  const [active, setActive] = useState(null);

  const [enableMuliSelection, setEnableMuliSelection] = useState(false);
  const [selected, setSelected] = useState([]);

  const handelSingleSelection = (id) => {
    setActive(active === id ? null : id);
    console.log(id);
  };

  const handelMultiSelection = (id) => {
    let cpyMultiple = [...selected];
    const findIndexOfId = cpyMultiple.indexOf(id);
    if (findIndexOfId === -1) {
      cpyMultiple.push(id);
    } else {
      cpyMultiple.splice(findIndexOfId, 1);
    }
    setSelected(cpyMultiple);
  };

  return (
    <div className="w-full h-[100vh] flex flex-col justify-center items-center bg-slate-800 text-white">
      <h1 className="text-3xl font-bold">Accordian</h1>

      <div className="w-[50%]">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div
              key={dataItem.id}
              className="m-5 w-[100%] border border-slate-600 p-5 rounded-md bg-slate-700"
            >
              <div
                className="flex justify-between items-center "
                onClick={
                  enableMuliSelection
                    ? () => handelMultiSelection(dataItem.id)
                    : () => handelSingleSelection(dataItem.id)
                }
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              <div className="mt-4">
                {/* {active === dataItem.id ||
                selected.indexOf(dataItem.id) !== -1 ? (
                  <p>{dataItem.answer}</p>
                ) : null} */}
                {enableMuliSelection
                  ? selected.indexOf(dataItem.id) !== -1 && (
                      <p className="">{dataItem.answer}</p>
                    )
                  : active === dataItem.id && <p>{dataItem.answer}</p>}
              </div>
            </div>
          ))
        ) : (
          <div className="">No Item Found</div>
        )}
      </div>
      <button
        onClick={() => setEnableMuliSelection(!enableMuliSelection)}
        className="mt-5 border border-slate-100 p-5 rounded-full"
      >
        {enableMuliSelection
          ? "Disable Multi Selection"
          : "Enable Multi Selection"}
      </button>
    </div>
  );
};

export default Accordian;
