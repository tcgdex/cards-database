import { Card } from "../../../interfaces"
import Set from "../SC1a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "鋁鋼龍"
	},

	dexId: [884],
	illustrator: "Ryuta Fuse",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],

	description: {
		'zh-tw': "身體猶如打磨過的金屬，雖然輕而堅硬，卻有著容易生鏽的弱點。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "金屬爪"
		},

		damage: 70,
		cost: ["Metal", "Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "鐵蹄光線"
		},

		effect: {
			'zh-tw': "這隻寶可夢也受到40點傷害。"
		},

		damage: 150,
		cost: ["Metal", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card