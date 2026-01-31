import { Card } from '../../../interfaces'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		en: "Sunflora",
		fr: "Heliatronc",
		de: "Sonnflora"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		192,
	],

	hp: 70,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Sunkern",
		fr: "Tournegin"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Dazzle Dance",
				fr: "Danse éblouissante",
				de: "Dazzle Dance"
			},
			effect: {
				en: "Each Defending Pokémon is now Confused.",
				fr: "Chaque Pokémon Défenseur est maintenant Confus.",
				de: "Each Defending Pokémon is now Confused."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Green Blast",
				fr: "Explosion verte",
				de: "Green Blast"
			},
			effect: {
				en: "Does 20 damage plus 10 more damage for each Grass Energy attached to all of your Pokémon.",
				fr: "Inflige 20 dégâts plus 10 dégâts supplémentaires pour chaque Énergie  attachée à tous vos Pokémon.",
				de: "Does 20 damage plus 10 more damage for each  Energy attached to all of your Pokémon."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-30"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 276662,
		tcgplayer: 89614
	},

	variants: [
		{
			type: "holo",
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		}
	]
}

export default card
