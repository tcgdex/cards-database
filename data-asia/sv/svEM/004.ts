import { Card } from "../../../interfaces"
import Set from "../svEM"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "天然雀"
	},

	illustrator: "ryoma uratsuka",
	category: "Pokemon",
	hp: 50,
	types: ["Psychic"],

	description: {
		'zh-tw': "翅膀還沒有完全長好，所以只能一跳一跳地移動。 一直在注視著什麼。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "三連撞"
		},

		effect: {
			'zh-tw': "擲3次硬幣，造成正面出現的次數×10點傷害。"
		},

		damage: "10×",
		cost: ["Psychic"]
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
	regulationMark: "G"
}

export default card