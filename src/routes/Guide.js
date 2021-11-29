import Page from '@components/Page';
import ListItem from '@components/ListItem';

const items = [
    {
        id: 1,
        number: 1,
        description: 'Entrada',
        audioId: 123,
    },
    {
        id: 2,
        number: 2,
        description: 'Lago dos peixes',
        audioId: 223,
    },
    {
        id: 3,
        number: 3,
        description: 'Árvore da vida',
        audioId: 323,
    },
]

function Guide() {
    return (
        <Page content={
            <div className="o-content">
                <ul className="o-stack">
                    {items.map(item => (
                        <ListItem key={item.id} item={item} />
                    ))}
                </ul>
            </div>
        }/>
    )
}

export default Guide;