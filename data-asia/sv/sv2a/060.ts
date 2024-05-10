import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ニョロモ",
		'zh-tw': "蚊香蝌蚪"
	},

	illustrator: "Kurata So",
	rarity: "Common",
	category: "Pokemon",
	dexId: [60],
	hp: 60,
	types: ["Water"],

	description: {
		ja: "流れが 速い 川では ぶ厚い 唇を 吸盤のように 岩に くっつけて しがみつく。",
		'zh-tw': "在水流湍急的河川裡，會把厚厚的嘴唇當作吸盤， 吸附在岩石上避免被沖走。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "あわ",
			'zh-tw': "泡沫"
		},

		damage: 10,

		effect: {
			ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card