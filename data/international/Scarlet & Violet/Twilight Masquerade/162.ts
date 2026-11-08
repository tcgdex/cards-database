import { Card } from "models/database/card"
import Set from "../Twilight Masquerade"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Scoop Up Cyclone",
		'fr-fr': "Rappel Cyclone",
		'es-es': "Ciclón Levante",
		'it-it': "Mega Recupero",
		'pt-br': "Recolhida Ciclone",
		'de-de': "Aufwischwirbel"
	},

	rarity: "ACE SPEC Rare",
	category: "Trainer",

	effect: {
		'en-us': "Put 1 of your Pokémon and all attached cards into your hand.",
		'fr-fr': "Ajoutez à votre main l'un de vos Pokémon et toutes les cartes qui lui sont attachées.",
		'es-es': "Pon 1 de tus Pokémon y todas las cartas unidas a él en tu mano.",
		'it-it': "Riprendi in mano uno dei tuoi Pokémon e tutte le carte a esso assegnate.",
		'pt-br': "Coloque 1 dos seus Pokémon e todas as cartas ligadas a ele na sua mão.",
		'de-de': "Nimm 1 deiner Pokémon und alle angelegten Karten auf deine Hand."
	},

	trainerType: "Item",
	regulationMark: "H",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 769336,
				tcgplayer: 550206
			}
		},
	],

	illustrator: "Toyste Beach",

}

export default card