import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "ヤドン",
		'zh-tw': "呆呆獸"
	},

	illustrator: "Narumi Sato",
	category: "Pokemon",
	dexId: [79],
	hp: 70,
	types: ["Water"],

	description: {
		ja: "いつも ボーッとしていて なにを 考えているか わからない。 尻尾で エサを 釣るのが 得意。",
		'zh-tw': "總是一副在發呆的樣子，不知道在想些什麼。 擅長用尾巴來釣食物。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ねむる",
			'zh-tw': "睡覺"
		},

		effect: {
			ja: "このポケモンをねむりにする。このポケモンのHPを「30」回復する。",
			'zh-tw': "將這隻寶可夢【睡眠】。將這隻寶可夢恢復「30」HP。"
		}
	}, {
		cost: ["Water", "Colorless"],

		name: {
			ja: "ずつき",
			'zh-tw': "頭錘"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card