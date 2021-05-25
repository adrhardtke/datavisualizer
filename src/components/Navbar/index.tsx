import React from 'react'
import { AiFillGithub as GithubIcon} from 'react-icons/ai'
import { Navbar} from 'react-bootstrap'

const MyNavBar = () => {
    
        return (
            <Navbar>
                <Navbar.Brand href="#home">Data Visualizer</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                    View on <a href="#login">Github <GithubIcon size="24" /> </a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        )
    
}

export default MyNavBar