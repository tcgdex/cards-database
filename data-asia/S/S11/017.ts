import { Card } from "../../../interfaces"
import Set from "../S11"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "妖火紅狐V"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 210,
	types: ["Fire"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "奇異燈火"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【灼傷】與【混亂】。"
		},

		cost: ["Fire"]
	}, {
		name: {
			'zh-tw': "魔法之火"
		},

		effect: {
			'zh-tw': "將這隻寶可夢身上附加的2個能量放置於放逐區，對手的1隻備戰寶可夢也受到120點傷害。[在備戰區不計算弱點・抵抗力。]"
		},

		damage: 120,
		cost: ["Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card