import { Card } from "../../../interfaces"
import Set from "../sv4M"

const card: Card = {
	set: Set,

	name: {
		ja: "ワッカネズミ",
		'zh-tw': "一對鼠"
	},

	illustrator: "Akira Komayama",
	rarity: "Common",
	category: "Pokemon",
	dexId: [924],
	hp: 40,
	types: ["Colorless"],

	description: {
		ja: "どんなときでも ２匹は 一緒。 見つけた エサは ぴったりと 半分こして 仲良く 食べる。",
		'zh-tw': "無論何時２隻都待在一起。會把尋獲的食物均分成兩半，親密無間地一同進食。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "ずっこけ",
			'zh-tw': "滑落"
		},

		damage: 40,

		effect: {
			ja: "次の自分の番、このポケモンはワザが使えない。",
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。"
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