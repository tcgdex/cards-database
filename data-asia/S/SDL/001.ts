import { Card } from "../../../interfaces"
import Set from "../SDL"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "噴火龍V"
	},

	illustrator: "N-DESIGN Inc.",
	category: "Pokemon",
	hp: 220,
	types: ["Fire"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "燒盡"
		},

		effect: {
			'zh-tw': "在造成傷害前，將對手的戰鬥寶可夢身上附加的「寶可夢道具」丟棄。"
		},

		damage: 90,
		cost: ["Fire", "Fire", "Colorless"]
	}, {
		name: {
			'zh-tw': "高溫爆破"
		},

		damage: 180,
		cost: ["Fire", "Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card