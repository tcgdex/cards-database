import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "マダツボミ",
		'zh-tw': "喇叭芽"
	},

	illustrator: "Jerky",
	rarity: "Common",
	category: "Pokemon",
	dexId: [69],
	hp: 60,
	types: ["Grass"],

	description: {
		ja: "人の 顔のような つぼみから 伝説の マンドラゴラの 一種ではないかと ささやかれている。",
		'zh-tw': "因為花苞長得像人臉， 所以私底下有些人說牠是 傳說生物曼德拉草的一種。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "いあいぎり",
			'zh-tw': "居合斬"
		},

		damage: 10
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			ja: "しばりつける",
			'zh-tw': "束縛"
		},

		damage: 20,

		effect: {
			ja: "次の相手の番、このワザを受けたポケモンは、にげられない。",
			'zh-tw': "在下個對手的回合，受到這個招式的寶可夢無法撤退。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card