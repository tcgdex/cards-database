import { Card } from "../../../interfaces"
import Set from "../SCA"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "哥德小童"
	},

	illustrator: "sowsow",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],

	description: {
		'zh-tw': "據說會在星光閃耀的夜裡把睡著的孩子們帶走。也有人稱牠為制裁魔女。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "撒嬌聲"
		},

		effect: {
			'zh-tw': "在不看正面的情況下，從對手的手牌選擇1張，在看過那張卡正面後放回對手的牌庫並重洗。"
		},

		cost: ["Psychic"]
	}, {
		name: {
			'zh-tw': "雙重旋轉"
		},

		effect: {
			'zh-tw': "擲2次硬幣，造成正面出現的次數×30點傷害。"
		},

		damage: "30×",
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

	retreat: 2,
	regulationMark: "D"
}

export default card