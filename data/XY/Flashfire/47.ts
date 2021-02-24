import { Card } from '../../../interfaces'
import Set from '../Flashfire'

const card: Card = {
	name: {
		en: "Golem",
		fr: "Grolem",
	},
	illustrator: "Sumiyoshi Kizuki",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		76,
	],
	hp: 150,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Graveler",
		fr: "Gravalanch",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Fightning",
				"Fightning",
				"Colorless",
			],
			name: {
				en: "Stone Edge",
				fr: "Lame de Roc",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 30 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires.",
			},
			damage: 60,

		},
		{
			cost: [
				"Fightning",
				"Fightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Explosion",
				fr: "Explosion",
			},
			effect: {
				en: "This Pokémon does 100 damage to itself.",
				fr: "Ce Pokémon s'inflige 100 dégâts.",
			},
			damage: 150,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
