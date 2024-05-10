import { Card } from "../../../interfaces"
import Set from "../sv6"

const card: Card = {
	set: Set,

	name: {
		ja: "ココドラ",
		'zh-tw': "可可多拉"
	},

	category: "Pokemon",
	rarity: "Common",
	illustrator: "Gapao",
	dexId: [304],
	hp: 70,
	types: ["Metal"],

	description: {
		ja: "鉄鉱石や たまに 鉄道の レールを 食べて 体を 守る 鋼の 鎧が つくられる。",
		'zh-tw': "保護牠身體的鋼鐵盔甲， 是由牠吃下的鐵礦石以及 偶爾吃下的鐵軌所製成的。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Metal"],

		name: {
			ja: "すてみタックル",
			'zh-tw': "捨身衝撞"
		},

		damage: 20,

		effect: {
			ja: "このポケモンにも10ダメージ。",
			'zh-tw': "這隻寶可夢也受到10點傷害。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card
