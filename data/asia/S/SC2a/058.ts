import { Card } from "../../../interfaces"
import Set from "../SC2a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "胖丁"
	},

	illustrator: "Motofumi Fujiwara",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		'zh-tw': "讓肚子脹得大大的，唱出神奇的旋律。聽到後就會馬上變得昏昏欲睡。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "囈語"
		},

		damage: 10,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "月亮踢"
		},

		damage: 20,
		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
