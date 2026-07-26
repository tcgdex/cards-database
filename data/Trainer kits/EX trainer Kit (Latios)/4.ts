import { Card } from '../../../interfaces'
import Set from '../EX trainer Kit (Latios)'

const card: Card = {
	dexId: [81],
	set: Set,

	name: {
		en: "Magnemite",
		fr: "Magneti"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "None",
	category: "Pokemon",
	stage: "Basic",
	hp: 40,

	types: [
		"Lightning"
	],

	attacks: [{
		cost: [
			"Colorless",
		],
		name: {
			en: "Rollout",
			fr: "Roulade"
		},
		damage: 10
	}, {
		cost: [
			"Colorless",
			"Colorless"
		],
		name: {
			en: "Hook",
			fr: "Crochet"
		},
		damage: 20
	}],

	weaknesses: [
		{
			type: "Fighting",
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-30"
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275758,
				tcgplayer: 87076
			}
		},
	],

}

export default card
