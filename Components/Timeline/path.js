import React, { useState } from "react";
import Link from "next/link";
import {
  MyPathsContainer,
  PathHeader,
  ChosePath,
  PathHeaderContainer,
  Timeline,
  Timeline_container,
  TimeLine_Heading,
  Timeline_container_project_container,
  Timeline_container_project,
  TimeLine_Data,
  Timeline_Time,
  Close
} from "./pathcomponent";

function Path(props) {
  let [data, setdata] = useState(props.data);
  let [path, setpath] = useState(-1);
  const ShowPath = (index) => {
    if (path != index) {
      setpath(index);
    } else {
      setpath(-1);
    }
  };
  let year = 2022;
  return (
    <section id="Path">
      <MyPathsContainer>
        <ChosePath>TimeLines</ChosePath>
        <PathHeaderContainer>
          {JSON.parse(data).map((content, index) => {
            return (
              <Timeline key={index}>
                {path == -1 ? (
                  <Link href="#Timeline">
                    <PathHeader onClick={() => ShowPath(index)}>
                      {content.PathHeader}
                    </PathHeader>
                  </Link>
                ) : (
                  <PathHeader onClick={() => ShowPath(index)}>
                    {content.PathHeader}
                  </PathHeader>
                )}
              </Timeline>
            );
          })}
        </PathHeaderContainer>
        <PathHeaderContainer style={{ flexDirection: "column" }}>
          <section id="Timeline">
            <Timeline style={{ paddingTop: "5rem" }}>
              {path != -1 && <ChosePath>TimeLine</ChosePath>}
              {path != -1 && (
                <PathHeader>{JSON.parse(data)[path].PathHeader}</PathHeader>
              )}
              {path != -1 &&
                JSON.parse(data)[path].Path.reverse().map((pathdata, pindex) => {
                  return (
                    <>
                      <Timeline_container
                        imgUrl={`./${pathdata.year}m.png`}
                        pos={pindex}
                        right={pathdata.side}
                      >
                        <TimeLine_Heading>{pathdata.Heading}</TimeLine_Heading>
                        <Timeline_Time>{pathdata.month}</Timeline_Time>

                        <TimeLine_Data>
                          {pathdata.para}
                        </TimeLine_Data>
                        <Timeline_container_project_container>
                          <Timeline_container_project>
                            Projects
                          </Timeline_container_project>
                          <Timeline_container_project>
                            More..
                          </Timeline_container_project>
                        </Timeline_container_project_container>
                      </Timeline_container>
                    </>
                  );
                })}
            </Timeline>
          </section>
        </PathHeaderContainer>
      </MyPathsContainer>
      {path != -1 &&<Link href="#Path"><Close onClick={()=>{setpath(-1)}} >Back to Timeline</Close></Link>}
    </section>
  );
}

export default Path;
