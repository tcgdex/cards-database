import { Card } from "../../../interfaces"
import Set from "../S9a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "毒薔薇",
		ja: "ロゼリア"
	},

	illustrator: "Yukiko Baba",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		'zh-tw': "只要聞到牠的花香，就能放鬆心情。濃郁的香味 是毒薔薇有活力的證明。",
		ja: "花の 香りを かぐと 気持ちが リラックスする。 香りの 強い ロゼリアは 元気な 証拠。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "芳香催眠",
			ja: "アロマスリープ"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【睡眠】。",
			ja: "相手のバトルポケモンをねむりにする。"
		},

		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F",
	rarity: "Common",
	dexId: [315]
}

export default card