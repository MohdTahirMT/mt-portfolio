import React from 'react';
import { Card, CardBody, Col, Button, Badge } from 'reactstrap';
import Fade from 'react-reveal/Fade';
import { ProjectType } from '../types/sections';

const ProjectsCard = ({ name, desc, techs, link }: ProjectType) => {
  return (
    <Col lg="6">
      <Fade bottom duration={2000}>
        <Card className="shadow-lg--hover shadow mt-4">
          <CardBody>
            <div className="d-flex px-3">
              <div className="pl-4">
                <h3>{name}</h3>
                <p className="description mt-3">{desc}</p>
                {techs
                  ? techs?.split(' ')?.map((tech, i) => {
                      return (
                        <Badge key={i} color="primary" className="mr-1">
                          {tech}
                        </Badge>
                      );
                    })
                  : null}
                {link ? (
                  <div>
                    <Button
                      className="btn-icon mt-2"
                      color="success"
                      href={link}
                      target="_blank"
                      rel="noopener"
                      aria-label="Twitter"
                    >
                      <span className="btn-inner--icon">
                        <i className="fa fa-arrow-right mr-2" />
                      </span>
                      <span className="nav-link-inner--text ml-1">Demo</span>
                    </Button>
                  </div>
                ) : null}
              </div>
            </div>
          </CardBody>
        </Card>
      </Fade>
    </Col>
  );
};

export default ProjectsCard;
