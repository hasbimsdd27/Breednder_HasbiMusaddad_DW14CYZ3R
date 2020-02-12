import React, { Component } from 'react';
import { Button, Navbar, Nav, Jumbotron, Modal} from 'react-bootstrap';

class Landing extends Component{
    constructor(){
        super()
        this.state={
            showLog:false,
            showReg:false
        }
    }

    handleOpenModalLog(){
        this.setState({showLog: true})
    }

    handleCloseModalLog(){
        this.setState({showLog:false})
    }
    handleOpenModalReg(){
        this.setState({showReg: true})
    }

    handleCloseModalReg(){
        this.setState({showReg:false})
    }

    render(){
        return(
           <div className="App-body">
               <Navbar collapseOnSelect expand="lg" bg="transparent" variant="dark">
                    <Navbar.Brand href="#" className="App-tittle"><h2>Breednder</h2></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                        </Nav>
                        <Nav>
                        <Button className="App-btn" onClick={()=>{this.handleOpenModalLog()}}>Login</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

                <Jumbotron className="bg-transparent App-jumbotron">
                        <h4 className="App-desc">Swipe <strong>RIGHT</strong> <br></br> Make Your Pet <strong>HAPPY</strong></h4>
                        <h4 className="text-white"><em>Find Your Pet's Match</em></h4>
                        <div className="App-Card-Content-Main">
                            <p className ="App-text">
                                by clicking enter, you agree to <u>our terms</u>. Learn how we process your data in our <u>Privacy Policy</u> and <u>Cookie Policy</u>
                            </p>
                            <Button className="App-btn" onClick={()=>{this.handleOpenModalReg()}}>Register</Button>
                        </div>
                </Jumbotron>

                <Navbar fixed="bottom" className="App-footer">
                    <h6 className="App-footer-text text-center">Breednder © 2020</h6>
                </Navbar >

                <Modal show={this.state.showLog} >
                    <Modal.Header>Modal Head</Modal.Header>
                    <Modal.Body>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos, maxime.
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={()=>{this.handleCloseModalLog()}}>
                            Close Modal
                        </Button>
                    </Modal.Footer>
                </Modal>
                <Modal show={this.state.showReg} >
                    <Modal.Header>Modal Head</Modal.Header>
                    <Modal.Body>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos, maxime.
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={()=>{this.handleCloseModalReg()}}>
                            Close Modal
                        </Button>
                    </Modal.Footer>
                </Modal>
           </div>
        )
    }
}

export default Landing;