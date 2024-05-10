import { Card } from "../../../interfaces"
import Set from "../sv1S"

const card: Card = {
	set: Set,

	name: {
		ja: "ギャラドスex",
		'zh-tw': "暴鯉龍ex"
	},

	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 300,
	types: ["Water"],
	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		cost: ["Water", "Water", "Water"],

		name: {
			ja: "たきのぼり",
			'zh-tw': "攀瀑"
		},

		damage: 100
	}, {
		cost: ["Water", "Water", "Water", "Colorless", "Colorless"],

		name: {
			ja: "タイラントテール",
			'zh-tw': "暴君尾"
		},

		damage: "180+",

		effect: {
			ja: "相手のバトルポケモンにダメカンがのっているなら、180ダメージ追加。",
			'zh-tw': "若對手的戰鬥寶可夢身上放置有傷害指示物，則增加180點傷害。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "G"
}

export default card