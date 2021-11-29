import Page from '@components/Page';
import { useParams } from 'react-router-dom';

function Audio() {

    const { audio } = useParams();

    return (
        <Page content={
            <div className="o-content">
                <h1>Audio</h1>
                <p>{audio}</p>
            </div>
        } />
    )
}

export default Audio;