import { Card } from "../../../interfaces"
import Set from "../S8"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "黏美兒"
	},

	illustrator: "Saya Tsuruta",
	category: "Pokemon",
	hp: 80,
	types: ["Dragon"],

	description: {
		'zh-tw': "背上的突起物裡裝著牠小小的腦子，裡面只想著吃飯和逃離敵人這兩件事。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "溶解"
		},

		damage: 20,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "泰山壓頂"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。"
		},

		damage: 50,
		cost: ["Water", "Psychic"]
	}],

	retreat: 3,
	regulationMark: "E"
}

export default card