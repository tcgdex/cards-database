import { Card } from "../../../interfaces"
import Set from "../sv4M"

const card: Card = {
	set: Set,

	name: {
		ja: "バケッチャ",
		'zh-tw': "南瓜精"
	},

	illustrator: "saino misaki",
	rarity: "Common",
	category: "Pokemon",
	dexId: [710],
	hp: 60,
	types: ["Psychic"],

	description: {
		ja: "かぼちゃの 穴から 照らしている 光は 見た 人や ポケモンを 催眠状態にして 操る。",
		'zh-tw': "南瓜的洞裡發出的光會催眠並控制看到牠的人和寶可夢。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			ja: "タネばくだん",
			'zh-tw': "種子炸彈"
		},

		damage: 10
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "とつげき",
			'zh-tw': "突擊"
		},

		damage: 40,

		effect: {
			ja: "このポケモンにも20ダメージ。",
			'zh-tw': "這隻寶可夢也受到20點傷害。"
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card