import { Card } from "../../../interfaces"
import Set from "../SCC"

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
			'zh-tw': "衝撞"
		},

		damage: 10,
		cost: ["Grass"]
	}, {
		name: {
			'zh-tw': "銳利之爪"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則增加30點傷害。"
		},

		damage: "10+",
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card