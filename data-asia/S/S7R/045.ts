import { Card } from "../../../interfaces"
import Set from "../S7R"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "暴飛龍"
	},

	illustrator: "kodama",
	category: "Pokemon",
	hp: 170,
	types: ["Dragon"],

	description: {
		'zh-tw': "在不斷地強烈祈求之下，身體的細胞發生了突變，讓牠得到了夢寐以求的翅膀。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "威嚇戰吼"
		},

		effect: {
			'zh-tw': "在自己的回合時，可使用1次。將對手的戰鬥寶可夢與備戰寶可夢互換。[由對手選擇放置於戰鬥場的寶可夢。]"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "龍之殘暴"
		},

		effect: {
			'zh-tw': "若對手的戰鬥寶可夢身上放置有傷害指示物，則增加120點傷害。"
		},

		damage: "100+",
		cost: ["Fire", "Water"]
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card