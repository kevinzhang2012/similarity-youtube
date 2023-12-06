export type TestPageProps = { text: string }
export const TestPage: React.FC<TestPageProps> = ({ text }) => {
    console.log({ text })
    return (
        <div>233</div>
    )
};

export default TestPage;