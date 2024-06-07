import { Card } from "../../../interfaces"
import Set from "../S11a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "迷唇姐"
	},

	illustrator: "Tomokazu Komiya",
	category: "Pokemon",
	hp: 100,
	types: ["Psychic"],

	description: {
		'zh-tw': "在伽勒爾的某個地區，人們稱迷唇姐為冰之女王，並且敬畏崇拜牠。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "任性唇"
		},

		effect: {
			'zh-tw': "這隻寶可夢就算受到對手的「寶可夢【V】」招式的傷害而【氣絕】，對手也無法獲得獎賞卡。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "精神傷害"
		},

		effect: {
			'zh-tw': "增加對手的戰鬥寶可夢身上放置的傷害指示物的數量×10點傷害。"
		},

		damage: "10+",
		cost: ["Colorless", "Colorless"]
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