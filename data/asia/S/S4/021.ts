import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "雙刃丸"
	},

	illustrator: "Megumi Higuchi",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	description: {
		'zh-tw': "經過嚴格的修練後，每隻雙刃丸都能習得不同套路的扇貝貝刀法。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "水槍"
		},

		damage: 20,
		cost: ["Water"]
	}, {
		name: {
			'zh-tw': "水流清洗"
		},

		effect: {
			'zh-tw': "若希望，選擇1個對手的戰鬥寶可夢身上附加的能量，放回對手的手牌。"
		},

		damage: 50,
		cost: ["Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card