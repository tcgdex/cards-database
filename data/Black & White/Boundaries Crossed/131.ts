import { Card } from '../../../interfaces'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		en: "Poké Ball",
		fr: "Poké Ball",
		es: "Poké Ball",
		it: "Poké Ball",
		pt: "Poké Ball",
		de: "Pokéball"
	},

	illustrator: "Yuri Umemura",
	rarity: "Common",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Lancez une pièce. Si c’est face, cherchez un Pokémon dans votre deck, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
		en: "Flip a coin. If heads, search your deck for a Pokémon, reveal it, and put it into your hand. Shuffle your deck afterward.",
		es: "Lanza una moneda. Si sale cara, busca en tu baraja un Pokémon, enséñalo y ponlo en tu mano. Baraja las cartas de tu baraja después.",
		it: "Lancia una moneta. Se esce testa, cerca nel tuo mazzo un Pokémon, mostralo e aggiungilo alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
		pt: "Jogue uma moeda. Se sair cara, procure um Pokémon no seu deck, mostre-o e coloque-o na sua mão. Em seguida, embaralhe seus cards.",
		de: "Wirf 1 Münze. Durchsuche bei „Kopf“ dein Deck nach 1 Pokémon, zeige es deinem Gegner und nimm es auf deine Hand. Mische anschließend dein Deck."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 280718
	}
}

export default card
