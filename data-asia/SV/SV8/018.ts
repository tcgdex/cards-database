import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "アチゲータ",
		'zh-tw': "炙燙鱷",
		'zh-cn': "炙燙鱷"
	},

	illustrator: "Atsuya Uki",
	rarity: "Common",
	category: "Pokemon",
	dexId: [910],
	hp: 110,
	types: ["Fire"],

	description: {
		ja: "声帯と 炎袋の 弁は 密接な 関係。 だみ声を 上げながら 炎を 吐き散らす。",
		'zh-tw': "聲帶和火囊的閥緊鄰在一起。 會一邊發出嘶啞的聲音， 一邊噴灑火焰。",
		'zh-cn': "聲帶和火囊的閥緊鄰在一起。 會一邊發出嘶啞的聲音， 一邊噴灑火焰。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			ja: "ヒートブレス",
			'zh-tw': "高溫吐息",
			'zh-cn': "高溫吐息"
		},

		damage: "30+",

		effect: {
			ja: "コインを1回投げオモテなら、50ダメージ追加。",
			'zh-tw': "擲1次硬幣若為正面，則增加50點傷害。",
			'zh-cn': "擲1次硬幣若為正面，則增加50點傷害。"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card