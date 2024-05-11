import { Card } from "../../../interfaces"
import Set from "../S10a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "鬼斯通"
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		'zh-tw': "能夠穿牆透壁，出現在任何地方的恐怖惡靈。傳說被牠的舌頭舔過的人 將會日漸衰弱，最後喪命。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "詛咒水滴"
		},

		effect: {
			'zh-tw': "將3個傷害指示物以任意方式放置於對手的寶可夢身上。"
		},

		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card