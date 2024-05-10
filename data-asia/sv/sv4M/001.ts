import { Card } from "../../../interfaces"
import Set from "../sv4M"

const card: Card = {
	set: Set,

	name: {
		ja: "アメタマ",
		'zh-tw': "溜溜糖球"
	},

	illustrator: "Yoriyuki Ikegami",
	rarity: "Common",
	category: "Pokemon",
	dexId: [283],
	hp: 50,
	types: ["Grass"],

	description: {
		ja: "頭の 先から 水飴に 似た 甘い 匂いの 液体を 出す。 水草の 多い 池に 棲む。",
		'zh-tw': "從頭頂分泌出的液體有著如同麥芽糖般的甜味。住在有大量水草的池塘裡。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "トリプルスピン",
			'zh-tw': "三重旋轉"
		},

		damage: "10×",

		effect: {
			ja: "コインを3回投げ、オモテの数×10ダメージ。",
			'zh-tw': "擲3次硬幣，造成正面出現的次數×10點傷害。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card