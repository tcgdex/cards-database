import { Card } from "../../../interfaces"
import Set from "../S9"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "投摔鬼",
		ja: "ナゲキ"
	},

	illustrator: "Teeziro",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],

	description: {
		'zh-tw': "能使出一流的投摔招式。帶子被戰鬥時流下的汗水 浸濕，顏色越變越深。",
		ja: "投げ技の 腕は 一流。 戦いで かいた 汗が 染み 帯の 色が 濃く 染まっていく。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "撞倒",
			ja: "つきたおし"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "地球上投",
			ja: "ちきゅうなげ"
		},

		damage: 110,
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "F",
	rarity: "Common",
	dexId: [538],

	thirdParty: {
		cardmarket: 605907
	}
}

export default card