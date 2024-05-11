import { Card } from "../../../interfaces"
import Set from "../S10P"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "烏賊王"
	},

	illustrator: "Tomokazu Komiya",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],

	description: {
		'zh-tw': "要是盯著牠的發光體看，就會馬上陷入催眠狀態， 並且受到牠的控制。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "同步強念"
		},

		effect: {
			'zh-tw': "互看雙方手牌，若其中有名稱相同的卡，則增加90點傷害。"
		},

		damage: "30+",
		cost: ["Psychic"]
	}, {
		name: {
			'zh-tw': "念動彈"
		},

		damage: 80,
		cost: ["Psychic", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card