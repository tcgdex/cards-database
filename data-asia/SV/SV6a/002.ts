import { Card } from "../../../interfaces"
import Set from "../SV6a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "電蜘蛛"
	},

	illustrator: "mashu",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],

	description: {
		'zh-tw': "發射腹部帶電的毛來攻擊。 要是被牠的毛刺中， 就會全身麻痺三天三夜。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "‌[特性]複眼"
		},

		effect: {
			'zh-tw': "這隻寶可夢使用的招式，對對手的戰鬥場的擁有特性的寶可夢造成的傷害「+50」點。"
		}
	}, {
		name: {
			'zh-tw': "麻麻羅網"
		},

		effect: {
			'zh-tw': "若這隻寶可夢身上附有【雷】能量卡，則增加80點傷害。"
		},

		damage: "50+",
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card