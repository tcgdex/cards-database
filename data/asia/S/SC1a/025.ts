import { Card } from "../../../interfaces"
import Set from "../Sc1a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "啪嚓海膽"
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 80,
	types: ["Lightning"],

	description: {
		'zh-tw': "能從刺的尖端放電。會用銳利的牙齒刮取附在岩石上的海藻來吃。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "麻麻尖刺"
		},

		effect: {
			'zh-tw': "擲4次硬幣，造成正面出現的次數×30點傷害。若出現2次以上正面，則將對手的戰鬥寶可夢【麻痺】。"
		},

		damage: "30×",
		cost: ["Lightning", "Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card