import { Card } from "../../../interfaces"
import Set from "../sv2P"

const card: Card = {
	set: Set,

	name: {
		ja: "アルクジラ",
		'zh-tw': "走鯨"
	},

	illustrator: "Saya Tsuruta",
	rarity: "Common",
	category: "Pokemon",
	dexId: [974],
	hp: 100,
	types: ["Water"],

	description: {
		ja: "遥か 昔に 海から 上がって 陸地で 暮らすようになった。 ホエルコに 近い 種類らしい。",
		'zh-tw': "遠古時代自大海上岸後，就開始在陸地上生活。 似乎與吼吼鯨是相近的物種。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ねむる",
			'zh-tw': "睡覺"
		},

		effect: {
			ja: "このポケモンをねむりにする。このポケモンのHPを「60」回復する。",
			'zh-tw': "將這隻寶可夢【睡眠】。將這隻寶可夢恢復「60」HP。"
		}
	}, {
		cost: ["Water", "Colorless"],

		name: {
			ja: "すてみタックル",
			'zh-tw': "捨身衝撞"
		},

		damage: 50,

		effect: {
			ja: "このポケモンにも10ダメージ。",
			'zh-tw': "這隻寶可夢也受到10點傷害。"
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card