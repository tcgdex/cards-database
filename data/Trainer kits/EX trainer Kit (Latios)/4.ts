import { Card } from '../../../interfaces'
import Set from '../EX trainer Kit (Latios)'

const card: Card = {
	dexId: [81],
	set: Set,

	name: {
		en: "Magnemite"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "None",
	category: "Pokemon",
	stage: "Basic",
	hp: 40,

	types: [
		"Lightning",
	],

	attacks: [{
		cost: [
			"Colorless",
		],
		name: {
			en: "Rollout"
		},
		damage: 10
	}, {
		cost: [
			"Colorless",
			"Colorless"
		],
		name: {
			en: "Hook"
		},
		damage: 20
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "2x"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-30"
		},
	],

	retreat: 1,

	thirdParty: {
		tcgplayer: 87076
	}
}

export default card
