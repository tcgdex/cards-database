import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "パルシェン",
		'zh-tw': "刺甲貝"
	},

	illustrator: "Nelnal",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [91],
	hp: 130,
	types: ["Water"],

	description: {
		ja: "潮の 流れが 激しい 海に 生息している パルシェンの 殻の トゲは 大きく 鋭い。",
		'zh-tw': "刺甲貝棲息在潮流湍急的海裡， 殼上的刺又大又尖銳。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water", "Water"],

		name: {
			ja: "プロテクトチャージ",
			'zh-tw': "防護充能"
		},

		damage: 80,

		effect: {
			ja: "次の相手の番、このポケモンが受けるワザのダメージは「-80」される。",
			'zh-tw': "在下個對手的回合，這隻寶可夢受到招式的傷害「-80」點。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card