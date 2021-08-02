import { Card } from '../../../interfaces'
import Set from '../Kalos Starter Set'

const card: Card = {
	name: {
		en: "Greninja",
		fr: "Amphinobi",
	},
	illustrator: "5ban Graphics",
	rarity: "None",
	category: "Pokemon",

	set: Set,
	dexId: [
		658,
	],
	hp: 140,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Frogadier",
		fr: "Croâporal",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Mat Block",
				fr: "Tatamigaeshi",
			},
			effect: {
				en: "Flip a coin. If heads, discard an Energy attached to your opponent’s Active Pokémon.",
				fr: "Lancez une pièce. Si c’est face, défaussez une Énergie attachée au Pokémon Actif de votre adversaire.",
			},
			damage: 40,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Aqua Edge",
				fr: "Aqua-Dague",
			},

			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
