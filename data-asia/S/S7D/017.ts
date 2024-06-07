import { Card } from "../../../interfaces"
import Set from "../S7D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "南瓜怪人"
	},

	illustrator: "Megumi Higuchi",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	description: {
		'zh-tw': "南瓜怪人會在朔月的夜裡去別人家門口敲門。開了門的人會被牠帶往另一個世界。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "百鬼夜行"
		},

		effect: {
			'zh-tw': "將自己的牌庫上方6張卡翻到正面。造成其中的【超】寶可夢的數量×60點傷害。將翻到正面的【超】寶可夢放回牌庫並重洗。將剩餘卡丟棄。"
		},

		damage: "60×",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card