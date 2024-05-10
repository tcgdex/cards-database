import { Card } from "../../../interfaces"
import Set from "../sv2P"

const card: Card = {
	set: Set,

	name: {
		ja: "アママイコ",
		'zh-tw': "甜舞妮"
	},

	illustrator: "nagimiso",
	rarity: "Common",
	category: "Pokemon",
	dexId: [762],
	hp: 90,
	types: ["Grass"],

	description: {
		ja: "元気な 気持ちになれる 甘い 香りを 振りまく。 制汗剤の フレーバーとして 人気が 高い。",
		'zh-tw': "會散發出能振奮心情的香甜氣味。作為止汗劑 的香味擁有極高的人氣。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "アロマセラピー",
			'zh-tw': "芳香治療"
		},

		effect: {
			ja: "自分のポケモン全員のHPを、それぞれ「30」回復する。",
			'zh-tw': "將自己的所有寶可夢各恢復「30」HP。"
		}
	}, {
		cost: ["Grass", "Grass"],

		name: {
			ja: "はっぱカッター",
			'zh-tw': "飛葉快刀"
		},

		damage: 60
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card