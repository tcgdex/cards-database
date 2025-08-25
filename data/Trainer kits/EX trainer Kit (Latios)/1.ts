import { Card } from '../../../interfaces'
import Set from '../EX trainer Kit (Latios)'

const card: Card = {
	dexId: [309],
	set: Set,

	name: {
		en: "Electrike"
	},

	illustrator: "Ken Sugimori",
	rarity: "None",
	category: "Pokemon",
	stage: "Basic",
	hp: 50,

	types: [
		"Lightning",
	],

	attacks: [{
		cost: [
			"Colorless",
		],
		name: {
			en: "Headbutt"
		},
		damage: 10
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
		tcgplayer: 85131
	}
}

export default card
