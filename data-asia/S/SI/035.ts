import { Card } from "../../../interfaces"
import Set from "../SI"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "敲音猴"
	},

	illustrator: "kodama",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		'zh-tw': "會用木棒連續擊打來攻擊。 在以飛快的速度擊打的同時， 情緒也會變得越來越高漲。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "二連敲"
		},

		effect: {
			'zh-tw': "擲2次硬幣，造成正面出現的次數×30點傷害。"
		},

		damage: "30×",
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card