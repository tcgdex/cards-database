import { Card } from "../../../interfaces"
import Set from "../S8b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "投擲猴"
	},

	illustrator: "Teeziro",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],

	description: {
		'zh-tw': "２０幾隻形成團隊來生活。靠著每個成員明確的分工， 在嚴苛的大自然中生存下來。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "拋投特訓"
		},

		effect: {
			'zh-tw': "只要這隻寶可夢在場上，自己的「連擊」寶可夢使用的招式，對對手的備戰區的「寶可夢【V】・【GX】」造成的傷害「+30」點。無論有多少隻擁有這個特性的寶可夢，這個效果也不會重複。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "投擲"
		},

		effect: {
			'zh-tw': "對手的1隻寶可夢受到20點傷害。[在備戰區不計算弱點・抵抗力。]"
		},

		cost: ["Fighting"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card