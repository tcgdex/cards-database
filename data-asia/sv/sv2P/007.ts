import { Card } from "../../../interfaces"
import Set from "../sv2P"

const card: Card = {
	set: Set,

	name: {
		ja: "アマカジ",
		'zh-tw': "甜竹竹"
	},

	illustrator: "Kurata So",
	rarity: "Common",
	category: "Pokemon",
	dexId: [761],
	hp: 60,
	types: ["Grass"],

	description: {
		ja: "果物を 煮詰めたような 甘い 汗を かくため 甘味の 少ない 昔は とても 重宝された。",
		'zh-tw': "汗水帶著像是經過熬煮的水果甜味，在過去甜食尚少 的時代相當受到人們珍視。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "ふむ",
			'zh-tw': "踩"
		},

		damage: 10
	}, {
		cost: ["Grass", "Grass"],

		name: {
			ja: "とつげき",
			'zh-tw': "突擊"
		},

		damage: 30,

		effect: {
			ja: "このポケモンにも10ダメージ。",
			'zh-tw': "這隻寶可夢也受到10點傷害。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card