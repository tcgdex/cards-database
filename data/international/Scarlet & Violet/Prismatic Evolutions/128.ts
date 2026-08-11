import { Card } from "models/database/card"
import Set from "../Prismatic Evolutions"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Scoop Up Cyclone",
		'fr-fr': "Rappel Cyclone",
		'es-es': "Ciclón Levante",
		'pt-br': "Recolhida Ciclone",
		'it-it': "Mega Recupero",
		'de-de': "Aufwischwirbel"
	},

	rarity: "ACE SPEC Rare",
	category: "Trainer",

	effect: {
		'en-us': "Put 1 of your Pokémon and all attached cards into your hand.",
		'fr-fr': "Ajoutez à votre main l'un de vos Pokémon et toutes les cartes qui lui sont attachées.",
		'es-es': "Pon 1 de tus Pokémon y todas las cartas unidas a él en tu mano.",
		'pt-br': "Coloque 1 dos seus Pokémon e todas as cartas ligadas a ele na sua mão.",
		'it-it': "Riprendi in mano uno dei tuoi Pokémon e tutte le carte a esso assegnate.",
		'de-de': "Nimm 1 deiner Pokémon und alle angelegten Karten auf deine Hand."
	},

	trainerType: "Item",
	regulationMark: "H",

	illustrator: "Toyste Beach",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 805522,
				tcgplayer: 610483
			}
		},
	],
}

export default card
