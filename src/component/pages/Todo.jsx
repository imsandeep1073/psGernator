import React from 'react'
import { Modal, Button, ButtonToolbar, Placeholder } from 'rsuite';

export default function Todo() {

    const [open, setOpen] = React.useState(false);
    const [size, setSize] = React.useState();
    const handleOpen = value => {
        setSize(value);
        setOpen(true);
      };
    const handleClose = () => setOpen(false);

    const [overflow, setOverflow] = React.useState(true);

  

    return (
        <>
            <div className="bg-gray-900 w-full h-screen">
                <div>

                    <ButtonToolbar>
                        <Button onClick={() => handleOpen(350)}> Open</Button>
                    </ButtonToolbar>

                    <Modal overflow={overflow} size={size} open={open} onClose={handleClose}>
                        <Modal.Header>
                            <Modal.Title>Congratlution</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                        <Placeholder.Paragraph rows={80} />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={handleClose} appearance="primary">
                                Ok
                            </Button>
                            <Button onClick={handleClose} appearance="subtle">
                                Cancel
                            </Button>
                        </Modal.Footer>
                    </Modal>

                </div>

                
            </div>
        </>
    )
}


