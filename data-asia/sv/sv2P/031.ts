import { Card } from "../../../interfaces"
import Set from "../sv2P"

const card: Card = {
	set: Set,

	name: {
		ja: "ゴチム",
		'zh-tw': "哥德寶寶"
	},

	illustrator: "313",
	rarity: "Common",
	category: "Pokemon",
	dexId: [574],
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "いつもは とっても 無邪気。 見えない なにかを 見ているときは 瞬きも せずに ずっと 無言。",
		'zh-tw': "總是一副天真無邪的樣子。看見肉眼看不見的東西時， 就會眼都不眨地一語不發。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "はたく",
			'zh-tw': "拍擊"
		},

		damage: 10
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			ja: "ぶきみなねんぱ",
			'zh-tw': "不祥波動"
		},

		damage: 20,

		effect: {
			ja: "相手のバトルポケモンをこんらんにする。",
			'zh-tw': "將對手的戰鬥寶可夢【混亂】。"
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

	retreat: 1,
	regulationMark: "G"
}

export default card