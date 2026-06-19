import LeftStudioPanel from "../section/LeftPanel"
import StudioPromptPanel from "../section/PromptPanel"
import StudioOutputPanel from "../section/OutputPanel"

function StudioLayout () {
    return (
        <div>
            <div className="grid grid-cols-12 h-screen">
                <div className="col-span-2">
                    <LeftStudioPanel/>
                </div>
                <div className="col-span-7">
                    <StudioPromptPanel/>
                </div>
                <div className="col-span-3">
                    <StudioOutputPanel/>
                </div>
            </div>
        </div>
    )
}

export default StudioLayout