import { Card } from '../../../interfaces'
import Set from '../Emerging Powers'

const card: Card = {
	name: {
		en: "Excadrill",
		fr: "Minotaupe",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		530,
	],
	hp: 110,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Drilbur",
		fr: "Rototaupe",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Metal Claw",
				fr: "Griffe Acier",
			},

			damage: 30,

		},
		{
			cost: [
				"Fightning",
				"Fightning",
				"Fightning",
			],
			name: {
				en: "Drill Run",
				fr: "Tunnelier",
			},
			effect: {
				en: "Discard an Energy attached to the Defending Pokémon.",
				fr: "Défaussez une Énergie attachée au Pokémon Défenseur.",
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
