import { Card } from "../../../interfaces"
import Set from "../SV9a"

const card: Card = {
	set: Set,

	name: {
		ja: "ブイゼル",
		'zh-tw': "泳圈鼬",
		'zh-cn': "泳圈鼬"
	},

	illustrator: "Ayako Ozaki",
	rarity: "Common",
	category: "Pokemon",
	dexId: [418],
	hp: 70,
	types: ["Water"],

	description: {
		ja: "尻尾を スクリューのように まわし 水中を 泳ぐだけでなく まとわりつく 海草も 切れる。",
		'zh-tw': "像螺旋槳一樣旋轉的尾巴 除了能夠讓牠在水裡游泳， 還能切斷纏住自己的海草。",
		'zh-cn': "像螺旋槳一樣旋轉的尾巴 除了能夠讓牠在水裡游泳， 還能切斷纏住自己的海草。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "しっぽではたく",
			'zh-tw': "擺尾拍擊",
			'zh-cn': "擺尾拍擊"
		},

		damage: 10
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			ja: "スプラッシュ",
			'zh-tw': "飛濺",
			'zh-cn': "飛濺"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card