import { Card } from '../../../interfaces'
import Set from '../Plasma Blast'

const card: Card = {
	name: {
		en: "Master Ball",
		fr: "Master Ball",
		es: "Master Ball",
		it: "Master Ball",
		pt: "Bola Mestra",
		de: "Meisterball"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Cherchez un Pokémon dans votre deck, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
		en: "Search your deck for a Pokémon, reveal it, and put it into your hand. Shuffle your deck afterward.",
		es: "Busca en tu baraja a un Pokémon, enséñalo y ponlo en tu mano. Baraja las cartas de tu baraja después.",
		it: "Cerca nel tuo mazzo un Pokémon, mostralo e aggiungilo alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
		pt: "Procure um Pokémon em seu baralho, revele-o e coloque-o em sua mão. Em seguida, embaralhe seus cards.",
		de: "Durchsuche dein Deck nach 1 Pokémon, zeige es deinem Gegner und nimm es auf deine Hand. Mische anschließend dein Deck."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 281115
	}
}

export default card
