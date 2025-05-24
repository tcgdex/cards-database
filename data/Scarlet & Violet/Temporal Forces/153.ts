import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	set: Set,

	name: {
		en: "Master Ball",
		fr: "Master Ball",
		es: "Master Ball",
		it: "Master Ball",
		pt: "Bola Mestra",
		de: "Meisterball"
	},

	rarity: "ACE SPEC Rare",
	category: "Trainer",

	effect: {
		en: "Search your deck for a Pokémon, reveal it, and put it into your hand. Then, shuffle your deck.",
		fr: "Cherchez dans votre deck un Pokémon, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
		es: "Busca en tu baraja 1 Pokémon, enséñalo y ponlo en tu mano. Después, baraja las cartas de tu baraja.",
		it: "Cerca nel tuo mazzo un Pokémon, mostralo e aggiungilo alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
		pt: "Procure por um Pokémon no seu baralho, revele-o e coloque-o na sua mão. Em seguida, embaralhe o seu baralho.",
		de: "Durchsuche dein Deck nach 1 Pokémon, zeige es deinem Gegner und nimm es auf deine Hand. Mische anschließend dein Deck."
	},

	trainerType: "Item",
	regulationMark: "H",

	variants: {
		normal: false,
		reverse: false
	},

	illustrator: "Studio Bora Inc."
}

export default card