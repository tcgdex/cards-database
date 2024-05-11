import { Card } from "../../../interfaces"
import Set from "../S9a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "迷唇姐"
	},

	illustrator: "Nagomi Nijo",
	category: "Pokemon",
	hp: 100,
	types: ["Psychic"],

	description: {
		'zh-tw': "奇異的叫聲聽起來就像是 人類的語言。也有些音樂家 會創作讓迷唇姐唱的曲子。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "召喚舞"
		},

		effect: {
			'zh-tw': "選擇1隻對手的備戰寶可夢，與戰鬥寶可夢互換。然後，將新上場的寶可夢【混亂】。"
		},

		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "超念力"
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

	retreat: 1,
	regulationMark: "F"
}

export default card