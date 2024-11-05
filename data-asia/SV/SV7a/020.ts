import { Card } from "../../../interfaces"
import Set from "../SV7a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "拉帝歐斯",
		'zh-cn': "拉帝歐斯",
		ja: "ラティオス"
	},

	illustrator: "kantaro",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	description: {
		'zh-tw': "擁有很高智慧的寶可夢。 折疊起前肢飛行的話， 速度足以超越噴射機。",
		'zh-cn': "擁有很高智慧的寶可夢。 折疊起前肢飛行的話， 速度足以超越噴射機。",
		ja: "高い 知能を 持つ ポケモン。 腕を 折りたたんで 飛べば ジェット機を 追い越す スピードだ。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "直擊飛行",
			'zh-cn': "直擊飛行",
			ja: "ちょくげきひこう"
		},

		effect: {
			'zh-tw': "對手的1隻寶可夢受到50點傷害。[在備戰區不計算弱點・抵抗力。]",
			'zh-cn': "對手的1隻寶可夢受到50點傷害。[在備戰區不計算弱點・抵抗力。]",
			ja: "相手のポケモン1匹に、50ダメージ。［ベンチは弱点・抵抗力を計算しない。］"
		},

		cost: ["Psychic", "Colorless"]
	}, {
		name: {
			'zh-tw': "噴射頭擊",
			'zh-cn': "噴射頭擊",
			ja: "ジェットヘッド"
		},

		damage: 110,
		cost: ["Psychic", "Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 2,
	regulationMark: "H",
	rarity: "Uncommon",
	dexId: [381]
}

export default card