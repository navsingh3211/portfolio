import React from 'react';
import Layout from '@/components/Layout';
import EducationCard from '@/components/EducationCard';
import Pills from '@/components/Pills';
import {
  IoDiceOutline,
  IoLayersOutline,
  IoPersonOutline,
  IoServerOutline,
  IoSettingsOutline,
} from 'react-icons/io5';
import Head from 'next/head';

import * as config from '@/config/index';

export default function education() {
  return (
    <>
      <Head>
        <title>Education & Skills :: {config.MY_NAME}</title>
      </Head>
      <Layout border="border-2">
        <h3 className="text-lg font-semibold mt-3">Educational Background</h3>
        <div className="flex flex-col gap-4">
          <EducationCard
            degree="Bachelor of Technology"
            major="Electronics & communication Engineering"
            institute="HERITAGE INSTITUTE OF TECHNOLOGY"
            year="2016 - 2020"
            grade="CGPA 7.02"
          />
          <EducationCard
            degree="BSEB"
            major="12th Science"
            institute="Raja singh college"
            year="2013 - 2015"
            grade="PERCENT 71.2%"
          />
          <EducationCard
            degree="BSEB"
            major="10th (Matriculation)"
            institute="Jay Praksh Ishwari H/S"
            year="2003 – 2013"
            grade="PERCENT 86.6%"
          />
        </div>

        <h3 className="text-lg font-semibold mt-6">Skills </h3>
        <div className="px-4">
          <div className="flex gap-2 items-center mt-6">
            <IoLayersOutline className="flex-none text-xl" />
            <h3 className="text-lg font-semibold ">Frontend </h3>
          </div>
          <div className="flex flex-wrap gap-3 my-3 text-sm md:ml-8">
            <Pills text="HTML" cname="bg-green-100 py-1 " />
            <Pills text="CSS" cname="bg-blue-100 py-1" />
            <Pills text="JavaScript" cname="bg-purple-100 py-1" />
            <Pills text="ReactJS" cname="bg-yellow-100 py-1 " />
          </div>

          <div className="flex gap-2 items-center mt-6">
            <IoServerOutline className="flex-none text-xl" />
            <h3 className="text-lg font-semibold ">Backend </h3>
          </div>
          <div className="flex flex-wrap gap-3 my-3 text-sm md:ml-8">
            <Pills text="Node.js" cname="bg-blue-100 py-1" />
            <Pills text="Express.js" cname="bg-gray-100 py-1" />
            <Pills text="MySQL" cname="bg-blue-100 py-1" />
            <Pills text="MongoDB" cname="bg-yellow-100 py-1 " />
            <Pills text="REST API" cname="bg-green-100 py-1 " />
          </div>

          <div className="flex gap-2 items-center mt-6">
            <IoSettingsOutline className="flex-none text-xl" />
            <h3 className="text-lg font-semibold ">Tools & Frameworks </h3>
          </div>
          <div className="flex flex-wrap gap-3 my-3 text-sm md:ml-8">
            <Pills text="VS-code" cname="bg-red-100 py-1 " />
            <Pills text="Git" cname="bg-indigo-100 py-1 " />
            <Pills text="Github" cname="bg-blue-100 py-1 " />
          </div>


          <div className="flex gap-2 items-center mt-6">
            <IoPersonOutline className="flex-none text-xl" />
            <h3 className="text-lg font-semibold ">Personal </h3>
          </div>
          <div className="flex flex-wrap gap-3 my-3 text-sm md:ml-8">
            <Pills text="Efficient Codeing" cname="bg-red-100 py-1 " />
            <Pills
              text="Frontend & Backend Architecture"
              cname="bg-blue-100 py-1 "
            />
            <Pills text="Leadership" cname="bg-yellow-100 py-1 " />
            <Pills text="Team Work" cname="bg-green-100 py-1 " />
            <Pills text="Reusablility" cname="bg-gray-100 py-1 " />
          </div>
        </div>
      </Layout>
    </>
  );
}
