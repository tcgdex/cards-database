import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Tera Orb",
		'fr-fr': "Orbe Téracristal",
		'es-es': "Orbe Teracristal",
		'it-it': "Terasfera",
		'pt-br': "Orbe Tera",
		'de-de': "Terakristall-Orb"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'en-us': "Search your deck for a Tera Pokémon, reveal it, and put it into your hand. Then, shuffle your deck.",
		'fr-fr': "Cherchez dans votre deck un Pokémon Téracristal, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
		'es-es': "Busca en tu baraja 1 Pokémon Teracristal, enséñalo y ponlo en tu mano. Después, baraja las cartas de tu baraja.",
		'it-it': "Cerca nel tuo mazzo un Pokémon Teracristal, mostralo e aggiungilo alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
		'pt-br': "Procure por um Pokémon Tera no seu baralho, revele-o e coloque-o na sua mão. Em seguida, embaralhe o seu baralho.",
		'de-de': "Durchsuche dein Deck nach 1 Terakristall-Pokémon, zeige es deinem Gegner und nimm es auf deine Hand. Mische anschließend dein Deck."
	},

	trainerType: "Item",
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 794562,
				tcgplayer: 590076
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 794562,
				tcgplayer: 590076
			}
		},
	],

	illustrator: "Ayaka Yoshida",

}

export default card
