import { Card } from "../../../interfaces"
import Set from "../Sc1a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "怖思壺"
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		'zh-tw': "住在古董茶壺裡。雖然大多數都是贗品，但偶爾也能發現真貨。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "茶會"
		},

		effect: {
			'zh-tw': "雙方玩家各從牌庫抽出2張卡。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "騷靈現象"
		},

		effect: {
			'zh-tw': "查看對手的手牌，造成其中訓練家卡的張數×50點傷害。"
		},

		damage: "50×",
		cost: ["Psychic", "Colorless"]
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