import { Card } from "../../../interfaces"
import Set from "../sv3"

const card: Card = {
	set: Set,

	name: {
		ja: "ビークインex",
		'zh-tw': "蜂女王ex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 270,
	types: ["Psychic"],
	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "かいふくフェロモン",
			'zh-tw': "回復費洛蒙"
		},

		effect: {
			ja: "自分のポケモン1匹のHPを「60」回復する。",
			'zh-tw': "將自己的1隻寶可夢恢復「60」HP。"
		}
	}, {
		cost: ["Grass", "Grass", "Grass"],

		name: {
			ja: "ファントムクイーン",
			'zh-tw': "幻影皇后"
		},

		damage: 200,

		effect: {
			ja: "ダメカンがのっている相手のベンチポケモン全員に、それぞれダメカンを3個のせる。",
			'zh-tw': "在對手的身上放置有傷害指示物的所有備戰寶可夢身上，各放置3個傷害指示物。"
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