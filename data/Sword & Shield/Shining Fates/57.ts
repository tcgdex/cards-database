import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Ball Masqué",
		en: "Ball Guy",
		es: "Bolifacio",
		it: "Ballino",
		pt: "Cara da Bola",
		de: "Ballduin"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		fr: "Cherchez dans votre deck jusqu’à 3 cartes Objet différentes dont le nom contient le mot « Ball », montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
		en: "Search your deck for up to 3 different Item cards that have the word \"Ball\" in their name, reveal them, and put them into your hand. Then, shuffle your deck.",
		es: "Busca en tu baraja hasta 3 cartas de Objeto diferentes que tengan la palabra \"Ball\" en su nombre, enséñalas y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
		it: "Cerca nel tuo mazzo fino a tre diverse carte Strumento con “Ball” nel nome, mostrale e aggiungile alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
		pt: "Procure por até 3 cartas de Item diferentes no seu baralho que tenham a palavra \"Bola” em seu nome, revele-as e coloque-as na sua mão. Em seguida, embaralhe o seu baralho.",
		de: "Durchsuche dein Deck nach bis zu 3 verschiedenen Itemkarten, bei denen das Wort „Ball“ zum Namen gehört, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
	},

	trainerType: "Supporter",
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card