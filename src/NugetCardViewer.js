import React  from 'react'
import { ListGroup } from "react-bootstrap";

class NugetCardViewer extends React.Component {

    getElementValue(key)  {
        let rootElement = this.props.nuget.elements;

        if(rootElement) {
            let valueElement = rootElement.filter(e => e.name === key);
            if(valueElement && valueElement[0] && valueElement[0].elements && valueElement[0].elements[0])
                return valueElement[0].elements[0].text;
        }
            
        return '';
    }

    render() {
        return (
            <ListGroup horizontal>
                <ListGroup.Item>{this.getElementValue("")}</ListGroup.Item>
                <ListGroup.Item>{this.getElementValue("title")}</ListGroup.Item>
            </ListGroup>
        );
    }

}

export default NugetCardViewer;
