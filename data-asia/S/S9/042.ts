import { Card } from "../../../interfaces"
import Set from "../S9"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "皮可西",
		ja: "ピクシー"
	},

	illustrator: "Mizue",
	category: "Pokemon",
	hp: 100,
	types: ["Psychic"],

	description: {
		'zh-tw': "妖精的一種。極少出現在人類面前。一感覺到有人 就會立刻逃走。",
		ja: "妖精の 仲間で めったに 人前に 出てこない。 気配を 感じて すぐに 逃げてしまうようだ。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "月夜奇跡",
			ja: "つきよのきせき"
		},

		effect: {
			'zh-tw': "擲3次硬幣，選擇最多與正面出現的次數相同數量的自己的寶可夢。然後，從自己的牌庫選擇所選的寶可夢進化而來的卡各1張，放置於各自身上完成進化。並且重洗牌庫。",
			ja: "コインを3回投げ、オモテの数ぶんまで自分のポケモンを選ぶ。その後、選んだポケモンから進化するカードを、自分の山札から1枚ずつ選び、それぞれにのせて進化させる。そして山札を切る。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "魔法射擊",
			ja: "マジカルショット"
		},

		damage: 90,
		cost: ["Psychic", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F",
	rarity: "Uncommon",
	dexId: [36]
}

export default card