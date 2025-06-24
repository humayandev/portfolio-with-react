import React from 'react'

const EduCard = ({title,subTitle,result}) => {
  return (
    <div className="group w-full bg-black bg-opacity-20 hover:bg-opacity-30 duration-300 rounded-lg p-4 lgl:px-10 flex flex-col justify-center gap-6 lgl:gap-10 shadow-shadowOne">
      <div className="flex justify-between gap-4 lgl:gap-0 lgl:items-center">
        <div>
          <h3 className="text-xl md:text-2xl font-semibold group-hover:text-white duration-300">
            {title}
          </h3>
          <p className="text-sm mt-2 text-gray-400 group-hover:text-white duration-300">
            {subTitle}
          </p>
        </div>
        <div>
          <p className="px-4 py-2 text-designColor bg-black bg-opacity-25 rounded-lg flex justify-center items-center shadow-shadowOne text-sm font-medium">
            {result}
          </p>
        </div>
      </div>
    </div>
  );
}

export default EduCard