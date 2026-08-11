import { Card } from "../../../interfaces"
import Set from "../S10b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "卡咪龜"
	},

	illustrator: "kurumitsu",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	description: {
		'zh-tw': "被視為長壽的象徵。如果卡咪龜的殼上長著苔蘚，那就代表牠已經活了非常久。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "水槍"
		},

		damage: 30,
		cost: ["Water"]
	}, {
		name: {
			'zh-tw': "水炮"
		},

		effect: {
			'zh-tw': "增加這隻寶可夢身上附加的【水】能量的數量×10點傷害。"
		},

		damage: "50+",
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card