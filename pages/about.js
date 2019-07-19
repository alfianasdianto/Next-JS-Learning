import Header from '../components/Header';
import Layout from '../components/MyLayout';

const aboutPageContent = <p>This is the about page</p>;

export default function About() {
    console.log('aaa')
    return <Layout content={aboutPageContent} />;
}