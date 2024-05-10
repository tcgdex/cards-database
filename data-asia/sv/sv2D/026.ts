import { Card } from "../../../interfaces"
import Set from "../sv2D"

const card: Card = {
	set: Set,

	name: {
		ja: "プリン",
		'zh-tw': "胖丁"
	},

	illustrator: "Yuu Nishida",
	rarity: "Common",
	category: "Pokemon",
	dexId: [39],
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "つぶらな 瞳が 揺れるとき 眠たくなるような 不思議で 気持ちのいい 歌を 歌う。",
		'zh-tw': "當牠圓圓的大眼睛轉動時，就會唱起奇妙的歌曲， 讓人舒服地昏昏欲睡。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "うたう",
			'zh-tw': "唱歌"
		},

		effect: {
			ja: "相手のバトルポケモンをねむりにする。",
			'zh-tw': "將對手的戰鬥寶可夢【睡眠】。"
		}
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			ja: "ビンタ",
			'zh-tw': "巴掌"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card