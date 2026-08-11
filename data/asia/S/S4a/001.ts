import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "木木梟"
	},

	illustrator: "HYOGONOSUKE",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	description: {
		'zh-tw': "一邊飛行一邊射出刀刃般銳利的羽毛，距離近時會使出猛烈的踢擊。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "天空雜耍"
		},

		effect: {
			'zh-tw': "在這個回合，若從自己的手牌使出了「養鳥人」，則這隻寶可夢使用招式所需的能量全部消除。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "風礫"
		},

		effect: {
			'zh-tw': "對手的1隻備戰寶可夢受到60點傷害。[在備戰區不計算弱點・抵抗力。]"
		},

		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card