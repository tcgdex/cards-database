import { Card } from "../../../interfaces"
import Set from "../sv1a"

const card: Card = {
	set: Set,

	name: {
		ja: "ブイゼル",
		'zh-tw': "泳圈鼬"
	},

	illustrator: "Jerky",
	rarity: "Common",
	category: "Pokemon",
	dexId: [418],
	hp: 70,
	types: ["Water"],

	description: {
		ja: "尻尾を スクリューのように まわし 水中を 泳ぐだけでなく まとわりつく 海草も 切れる。",
		'zh-tw': "像螺旋槳一樣旋轉的尾巴除了能夠讓牠在水裡游泳， 還能切斷纏住自己的海草。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "でんこうせっか",
			'zh-tw': "電光一閃"
		},

		damage: "10+",

		effect: {
			ja: "コインを1回投げオモテなら、10ダメージ追加。",
			'zh-tw': "擲1次硬幣若為正面，則增加10點傷害。"
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