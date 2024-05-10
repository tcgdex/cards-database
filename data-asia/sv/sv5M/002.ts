import { Card } from "../../../interfaces"
import Set from "../sv5M"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "榛果球",
		th: "คุนุกิดามะ"
	},

	illustrator: "Midori Harada",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		'zh-tw': "口中吐出的液體是牠用來貼上樹皮的膠水， 一接觸到空氣就會凝固。",
		th: "ของเหลวที่พ่นออกมาจากปากคือกาวที่เอาไว้ติดเปลือกไม้ พอโดนอากาศก็จะแข็งตัว"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "衝撞",
			th: "กระแทก"
		},

		damage: 50,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card