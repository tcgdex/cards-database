import { Card } from "../../../interfaces"
import Set from "../sv1V"

const card: Card = {
	set: Set,

	name: {
		ja: "ワッカネズミ",
		'zh-tw': "一對鼠"
	},

	illustrator: "yuu",
	rarity: "Common",
	category: "Pokemon",
	dexId: [924],
	hp: 40,
	types: ["Colorless"],

	description: {
		ja: "どんなときでも ２匹は 一緒。 見つけた エサは ぴったりと 半分こして 仲良く 食べる。",
		'zh-tw': "無論何時２隻都待在一起。會把尋獲的食物均分成兩半， 親密無間地一同進食。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "ダブルアタック",
			'zh-tw': "二連擊"
		},

		damage: 30,

		effect: {
			ja: "コインを2回投げ、オモテの数×30ダメージ。",
			'zh-tw': "擲2次硬幣，造成正面出現的次數×30點傷害。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card