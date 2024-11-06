import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "ワッカネズミ",
		'zh-tw': "一對鼠",
		'zh-cn': "一對鼠"
	},

	illustrator: "USGMEN",
	rarity: "Common",
	category: "Pokemon",
	dexId: [924],
	hp: 40,
	types: ["Colorless"],

	description: {
		ja: "どんなときでも ２匹は 一緒。 見つけた エサは ぴったりと 半分こして 仲良く 食べる。",
		'zh-tw': "無論何時２隻都待在一起。 會把尋獲的食物均分成兩半， 親密無間地一同進食。",
		'zh-cn': "無論何時２隻都待在一起。 會把尋獲的食物均分成兩半， 親密無間地一同進食。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "じゃれつく",
			'zh-tw': "嬉鬧",
			'zh-cn': "嬉鬧"
		},

		damage: "10+",

		effect: {
			ja: "コインを1回投げオモテなら、10ダメージ追加。",
			'zh-tw': "擲1次硬幣若為正面，則增加10點傷害。",
			'zh-cn': "擲1次硬幣若為正面，則增加10點傷害。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card