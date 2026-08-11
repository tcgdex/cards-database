import { Card } from "models/database/card"
import Set from "../SV1S"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "スナヘビ",
		'zh-tw': "沙包蛇",
		'th-th': "ซึนะเฮบิ",
		'id-id': "Silicobra"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	dexId: [843],
	hp: 80,
	types: ["Fighting"],

	description: {
		'ja-jp': "風船のように 伸び縮む 首の 袋は 脱皮を 重ねるたびに 伸縮性が 増していく。",
		'zh-tw': "頸部的囊袋就像氣球一樣能伸縮自如，而隨著不斷 蛻皮，伸縮性會隨之增加。",
		'th-th': "ถุงที่คอยืดหดได้เหมือนลูกโป่ง ยิ่งลอกคราบมากเท่าไหร่ ถุงที่คอก็จะยืดหยุ่นมากขึ้นเท่านั้น",
		'id-id': "Kantong di leher Silicobra yang dapat memanjang dan memendek seperti balon akan menjadi makin elastis setiap kali ia berganti kulit."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fighting", "Colorless"],

		name: {
			'ja-jp': "どろかけ",
			'zh-tw': "擲泥",
			'th-th': "สาดโคลน",
			'id-id': "Semprotan Lumpur"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 693013,
				tcgplayer: 567163,
			},
		},
	],

	retreat: 2,
	regulationMark: "G"
}

export default card