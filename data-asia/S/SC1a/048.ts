import { Card } from "../../../interfaces"
import Set from "../Sc1a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "來悲茶"
	},

	illustrator: "Saya Tsuruta",
	category: "Pokemon",
	hp: 30,
	types: ["Psychic"],

	description: {
		'zh-tw': "據說這隻寶可夢是因為害怕寂寞的靈魂住進了涼透的喝剩紅茶而誕生的。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "茶會"
		},

		effect: {
			'zh-tw': "雙方玩家各從牌庫抽出2張卡。"
		},

		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card