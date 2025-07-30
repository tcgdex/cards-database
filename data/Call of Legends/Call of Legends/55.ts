import { Card } from '../../../interfaces'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		en: "Cyndaquil",
		fr: "Héricendre",
		de: "Feurigel"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		155,
	],

	hp: 40,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Fireworks",
				fr: "Feux d'artifice",
				de: "Feuerwerk"
			},
			effect: {
				en: "Flip a coin. If tails, discard a Fire Energy attached to Cyndaquil.",
				fr: "Lancez une pièce. Si c’est pile, défaussez une Énergie Fire attachée à Héricendre.",
				de: "Wirf eine Münze. Bei \"Zahl\" lege eine an Feurigel angelegte -Energiekarte auf deinen Ablagestapel."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 279698,
		tcgplayer: 84553
	}
}

export default card
