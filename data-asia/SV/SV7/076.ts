import { Card } from "../../../interfaces"
import Set from "../SV7"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "咕咕",
		'zh-cn': "咕咕",
		ja: "ホーホー"
	},

	illustrator: "Yukihiro Tada",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		'zh-tw': "由於能準確地報時， 因此在某些國家被視為是 明白世間一切事理的智慧之神。",
		'zh-cn': "由於能準確地報時， 因此在某些國家被視為是 明白世間一切事理的智慧之神。",
		ja: "正確に 時を 告げることから 世界の ことわりを わきまえた 知恵の神様 とする 国もある。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "三次撞",
			'zh-cn': "三次撞",
			ja: "さんどづき"
		},

		effect: {
			'zh-tw': "擲3次硬幣，造成正面出現的次數×10點傷害。",
			'zh-cn': "擲3次硬幣，造成正面出現的次數×10點傷害。",
			ja: "コインを3回投げ、オモテの数×10ダメージ。"
		},

		damage: "10×",
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 1,
	regulationMark: "H",
	rarity: "Common",
	dexId: [163]
}

export default card