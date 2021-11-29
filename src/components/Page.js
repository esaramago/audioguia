import './Page.css';
import Header from '@components/Header';
import Navigation from '@components/Navigation';

function Page(props) {
    return (
        <div className="o-page">
            <Header/>
            <main className="o-page__main">
                {props.content}
            </main>
            <Navigation/>
        </div>
    )
}
export default Page;