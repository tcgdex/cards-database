import { Card } from "../../../interfaces"
import Set from "../sv1S"

const card: Card = {
	set: Set,

	name: {
		ja: "スナヘビ",
		'zh-tw': "沙包蛇"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	dexId: [843],
	hp: 80,
	types: ["Fighting"],

	description: {
		ja: "風船のように 伸び縮む 首の 袋は 脱皮を 重ねるたびに 伸縮性が 増していく。",
		'zh-tw': "頸部的囊袋就像氣球一樣能伸縮自如，而隨著不斷 蛻皮，伸縮性會隨之增加。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fighting", "Colorless"],

		name: {
			ja: "どろかけ",
			'zh-tw': "擲泥"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card