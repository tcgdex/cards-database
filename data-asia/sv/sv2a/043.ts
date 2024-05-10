import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ナゾノクサ",
		'zh-tw': "走路草"
	},

	illustrator: "Sekio",
	rarity: "Common",
	category: "Pokemon",
	dexId: [43],
	hp: 60,
	types: ["Grass"],

	description: {
		ja: "昼間は 太陽を 避けるため 冷たい 地面に もぐっている。 月の光を 浴びて 育つ。",
		'zh-tw': "白天為了躲避太陽，會鑽進涼爽的地下。 藉由沐浴月光來成長。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "はっぱカッター",
			'zh-tw': "飛葉快刀"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card