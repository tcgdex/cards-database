import { Card } from "../../../interfaces"
import Set from "../SI"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "勇士雄鷹"
	},

	illustrator: "SATOSHI NAKAI",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],
	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "勇猛之爪"
		},

		effect: {
			'zh-tw': "若對手的戰鬥寶可夢為進化寶可夢，則增加60點傷害。"
		},

		damage: "30+",
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "勇鳥猛攻"
		},

		effect: {
			'zh-tw': "這隻寶可夢也受到50點傷害。"
		},

		damage: 150,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card