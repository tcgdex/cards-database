import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	set: Set,

	name: {
		en: "Luxray"
	},

	illustrator: "Megumi Higuchi",
	rarity: "None",
	category: "Pokemon",
	dexId: [405],
	hp: 160,
	types: ["Lightning"],

	evolveFrom: {
		en: "Luxio"
	},

	description: {
		en: "Luxray's ability to see through objects comes in handy when it's scouting for danger."
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Lightning"],

		name: {
			en: "Raid"
		},

		effect: {
			en: "If this Pokémon evolved from Luxio during this turn, this attack does 100 more damage."
		},

		damage: "60+"
	}, {
		cost: ["Lightning", "Colorless"],

		name: {
			en: "Head Bolt"
		},

		damage: 120
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1
}

export default card