'use client'

import { createClient } from "next-sanity";
import { projectId, dataset, apiVersion, useCdn } from "../../../sanity/env";
import { useState, useEffect } from "react";
import Project from "../components/Project";
import Spinner from "../components/Spinner";

const client = createClient({
  projectId: projectId,
  dataset: dataset,
  apiVersion: apiVersion,
  useCdn: useCdn,
});

async function fetchWork() {
  try {
    const workQuery = `*[_type == "work"]{name, website, description, year, priority} | order(priority asc)`;
    const data = await client.fetch(workQuery);
    return data;
  } catch (error) {
    console.error("Error fetching data from Sanity:", error);
    return [];
  }
}

export default function GetWork() {
  const [projects, setProjects] = useState([]); 

  useEffect(() => {
    async function fetchData() {
      const projectData = await fetchWork();
      setProjects(projectData); 
    }
    fetchData();
  }, []);

  return (
    <>
      {projects.length > 0 ? (
        <div className="flex flex-col">
          {projects.map((project, i) => (
            <div key={i}>
              <Project key={i} projectData={project} />
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-row justify-around mb-4">
          <Spinner />
        </div>
      )}
    </>
  )
}
