import React from 'react';
import Layout from '@/components/Layout';
import InternshipCard from '@/components/InternshipCard';
import MentorshipCard from '@/components/MentorshipCard'; 
import Head from 'next/head';

import * as config from '@/config/index';

export default function skillsAndExperience() {
  return (
    <>
      <Head>
        <title>Expereience :: {config.MY_NAME}</title>
      </Head>
      <Layout border="border-2">
        <h3 className="text-lg font-semibold mt-3">Experience</h3>
        <InternshipCard
          title="Anandpushp Technologies Private Limited"
          date="August 2021 –  Present"
          place="Software Developer"
          desc={
            <div>
              Bidhannagar, Kolkata, West Bengal, India · On-site
              <br />
              <br />
              Developing and Optimizing "MERN" Stack Projects
              <br />
              <br />
              1. Jobs In Education (Link:- "jobsineducation.net"):-
              <br /> <br />
              • This application is for job seekers.Something like naukari.com.
              <br />
              • item It has three panel (Admin,Seeker,Employer).
              <br />
              • I design Restful Apis,Writing Mysql and Mongodb queries to achieve different features.
              <br />
              • Created different database schema to achive different functionality and features.
              <br />
              • Created different Push notification on email and whatsapp by calling salesforce api.
              <br />
              • Implemented S3 and CDN to upload,get and delete images,videos.
              <br />
              • Different Scheduler and crons for triggering some notification or performing some action.
              <br />
              <br />
              <br />
              2. Agorae (Link:- "agorae.app"):-
              <br /> <br />
              • In this Project ,i have worked on inventory(like e-commerce)  which a sub-part of Agorae project.
              <br />
              • In this Project,Any admin from a institute can add the product and Staff or student of that institute can buy the product..
              <br />
              • Created Database design and  Schemas for this project by doing R n D by myself.
              <br />
              • Created diffreent function to handle backend and front errors.
              <br />
              
            </div>
          }
          link="https://www.jobsineducation.net/"
          linkText="Product Link"
        />

        <h3 className="text-lg font-semibold mt-3">Company Traning</h3>
        <MentorshipCard
          org="Anandpushp Technologies Private Limited"
          date="June 2021 –  Aug 2021"
          desig="Software Developer Intern"
          desc="I learnt Node Js,Mongodb,PHP,SQL,DBMS,AJEX,CI,HTML,CSS And JavaScript."
          link="https://nextstacks.hashnode.dev/"
          linkText="Link"
        />
      </Layout>
    </>
  );
}
