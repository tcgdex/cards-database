import { Card } from "models/database/card"
import Set from "../SV9a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ポニータ",
		'zh-tw': "小火馬",
		'zh-cn': "小火馬"
	},

	illustrator: "Ayako Ozaki",
	rarity: "Common",
	category: "Pokemon",
	dexId: [77],
	hp: 70,
	types: ["Fire"],

	description: {
		'ja-jp': "ポニータに 認められると 燃える たてがみに 触っても 不思議と 熱くなくなるのだ。",
		'zh-tw': "得到了小火馬認可的人， 在觸摸牠燃燒著的鬃毛時 不會覺得燙手，真是不可思議。",
		'zh-cn': "得到了小火馬認可的人， 在觸摸牠燃燒著的鬃毛時 不會覺得燙手，真是不可思議。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'ja-jp': "にどずつき",
			'zh-tw': "二連頭錘",
			'zh-cn': "二連頭錘"
		},

		damage: "10×",

		effect: {
			'ja-jp': "コインを2回投げ、オモテの数×10ダメージ。",
			'zh-tw': "擲2次硬幣，造成正面出現的次數×10點傷害。",
			'zh-cn': "擲2次硬幣，造成正面出現的次數×10點傷害。"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card