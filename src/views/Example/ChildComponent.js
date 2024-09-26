import React from 'react';

class ChildComponent extends React.Component {
    
    state = {
        showClass: false
    }

    handleShowHide = () => {
        this.setState({
            showClass: !this.state.showClass
        })
    }

    handleDelete =(cla)=>{
        this.props.deleteCla(cla)
        //console.log('>>> handle', cla)
    }
    
    render() {
        let { arrClass } = this.props;
        let { showClass } = this.state;
        let check = showClass === true ? 'showClass = true' : 'showClass = false';
        console.log('>>> check conditional: ', check)
        return (
            <>
                {showClass === false ?
                    <div>
                        <button onClick={() => this.handleShowHide()}>Show</button>
                    </div>
                    :
                    <>
                        <div className="job-lists">
                            {
                                arrClass.map((item, index) => {
                                    return (
                                        <div key={item.id}>
                                            {item.name} - {item.room} 
                                            <span className='del' onClick={()=>this.handleDelete(item)}>Del</span>
                                        </div>
                                    )
                                })

                            }
                        </div>
                        <div>
                            <button onClick={() => this.handleShowHide()}>Hide</button>
                        </div>
                    </>
                }
            </>
        )

    }
}

export default ChildComponent;