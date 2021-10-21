import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Familiar Bell",
		fr: "Cloche Familière",
		es: "Campanilla Familiar",
		it: "Campanella Familiare",
		pt: "Sino Familiar",
		de: "Vertraute Glocke"
	},

	illustrator: "sadaji",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Search your deck for a Pokémon with the same name as a Pokémon in your discard pile, reveal it, and put it into your hand. Then, shuffle your deck.",
		fr: "Cherchez dans votre deck un Pokémon du même nom que l'un des Pokémon dans votre pile de défausse, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
		es: "Busca en tu baraja 1 Pokémon con el mismo nombre que 1 Pokémon en tu pila de descartes, enséñalo y ponlo en tu mano. Después, baraja las cartas de tu baraja.",
		it: "Cerca nel tuo mazzo un Pokémon con lo stesso nome di uno di quelli nella tua pila degli scarti, mostralo e aggiungilo alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
		pt: "Procure por 1 Pokémon no seu baralho que tenha o mesmo nome de 1 dos Pokémon na sua pilha de descarte, revele-o e coloque-o na sua mão. Em seguida, embaralhe o seu baralho.",
		de: "Durchsuche dein Deck nach 1 Pokémon mit demselben Namen wie ein Pokémon in deinem Ablagestapel, zeige es deinem Gegner und nimm es auf deine Hand. Mische anschließend dein Deck."
	},

	trainerType: "Item",
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card
