import { Card } from "../../../interfaces"
import Set from "../sv3"

const card: Card = {
	set: Set,

	name: {
		ja: "ロコン",
		'zh-tw': "六尾"
	},

	illustrator: "313",
	rarity: "Common",
	category: "Pokemon",
	dexId: [37],
	hp: 60,
	types: ["Fire"],

	description: {
		ja: "６本の しっぽは 育つごとに 毛並みが 良くなり 美しくなる。 抱きしめると ほんのり 温かい。",
		'zh-tw': "隨著身體的成長，６根尾巴的毛髮也會變得更漂亮。緊緊抱著牠時能感到微微的溫暖。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			ja: "かえん",
			'zh-tw': "烈焰"
		},

		damage: 10
	}, {
		cost: ["Fire", "Fire"],

		name: {
			ja: "あやしいひかり",
			'zh-tw': "奇異之光"
		},

		damage: 20,

		effect: {
			ja: "相手のバトルポケモンをこんらんにする。",
			'zh-tw': "將對手的戰鬥寶可夢【混亂】。"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card