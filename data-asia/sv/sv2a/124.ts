import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ルージュラex",
		'zh-tw': "迷唇姐ex"
	},

	illustrator: "Ayaka Yoshida",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 200,
	types: ["Water"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			ja: "ズッキュンキッス",
			'zh-tw': "動心之吻"
		},

		effect: {
			ja: "相手のバトルポケモンがねむりなら、そのポケモンをきぜつさせる。",
			'zh-tw': "若對手的戰鬥寶可夢【睡眠】，則將那隻寶可夢【昏厥】。"
		}
	}, {
		cost: ["Water", "Water", "Water"],

		name: {
			ja: "こごえるかぜ",
			'zh-tw': "冰凍之風"
		},

		damage: 120,

		effect: {
			ja: "相手のバトルポケモンをねむりにする。",
			'zh-tw': "將對手的戰鬥寶可夢【睡眠】。"
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card