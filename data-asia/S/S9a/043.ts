import { Card } from "../../../interfaces"
import Set from "../S9a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "光輝摔角鷹人"
	},

	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],

	description: {
		'zh-tw': "利用發揮輕盈體型優勢的戰法，在消耗了對手的體力之後 使用華麗的絕招分出勝負。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "大型競賽"
		},

		effect: {
			'zh-tw': "只要這隻寶可夢在備戰區，自己的寶可夢使用的招式，對對手的戰鬥場的「寶可夢【VMAX】」造成的傷害「+30」點。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "迴轉踢"
		},

		damage: 50,
		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card