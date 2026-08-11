import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "戰舞郎"
	},

	illustrator: "Sanosuke Sakuma",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],

	description: {
		'zh-tw': "會旋轉身體使出踢擊。當牠高速旋轉身體時，會直接鑽進地底下。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "循環抽出"
		},

		effect: {
			'zh-tw': "將自己的1張手牌丟棄。然後，從自己的牌庫抽出3張卡。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "龍捲風踢"
		},

		effect: {
			'zh-tw': "在這個回合，若從手牌使出了「彩豆」，則增加80點傷害。"
		},

		damage: "50+",
		cost: ["Fighting", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card