import { Card } from "../../../interfaces"
import Set from "../S6H"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "石居蟹"
	},

	illustrator: "Shigenori Negishi",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		'zh-tw': "如果找不到大小合適的石頭來當成自己的家，牠也會住到河馬獸的洞裡。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "拍擊"
		},

		damage: 10,
		cost: ["Psychic"]
	}, {
		name: {
			'zh-tw': "出拳"
		},

		damage: 30,
		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card