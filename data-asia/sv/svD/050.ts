import { Card } from "../../../interfaces"
import Set from "../svD"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "布魯皇"
	},

	illustrator: "Lee HyunJung",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],

	description: {
		'zh-tw': "雖然很受年輕女性歡迎，但牠不但膽小而且個性纖細， 以看門狗來說一點用都沒有。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "正面對決"
		},

		damage: 50,
		cost: ["Psychic", "Colorless"]
	}, {
		name: {
			'zh-tw': "狂野衝撞"
		},

		effect: {
			'zh-tw': "這隻寶可夢也受到30點傷害。"
		},

		damage: 160,
		cost: ["Psychic", "Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card