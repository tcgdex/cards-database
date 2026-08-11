import { Card } from "../../../interfaces"
import Set from "../SC1D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "禿鷹丫頭"
	},

	illustrator: "Shibuzoh.",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],

	description: {
		'zh-tw': "穿上骸骨來保護屁股。會和夥伴互相爭搶穿起來舒服的骸骨。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "啄食"
		},

		effect: {
			'zh-tw': "在造成傷害前，將對手的戰鬥寶可夢身上附加的「寶可夢道具」丟棄。"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
