import { Card } from '../../../interfaces'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		en: "Charmander",
		fr: "Salamèche",
		de: "Glumanda"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		4,
	],

	hp: 50,

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
				en: "Flare",
				fr: "Intimidation",
				de: "Flare"
			},

			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rage",
				fr: "Frénésie",
				de: "Rage"
			},
			effect: {
				en: "Does 10 damage plus 10 more damage for each damage counter on Charmander.",
				fr: "Inflige 10 dégâts plus 10 dégâts supplémentaires pour chaque marqueur de dégât sur Salamèche.",
				de: "Does 10 damage plus 10 more damage for each damage counter on Charmander"
			},
			damage: "10+",

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
		cardmarket: 276233,
		tcgplayer: 84211
	},

	variants: [
		{
			type: "holo"
		},
	]
}

export default card
