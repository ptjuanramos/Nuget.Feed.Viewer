import React  from 'react'
import NugetCardViewer from './NugetCardViewer'

class NugetCardList extends React.Component {
    render() {
        return (
            this.props.nugets.map(nuget => <NugetCardViewer nuget={nuget} />)
        );
    }
}

export default NugetCardList;