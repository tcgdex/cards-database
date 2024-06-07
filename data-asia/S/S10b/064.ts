import { Card } from "../../../interfaces"
import Set from "../S10b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "高傲雉雞"
	},

	illustrator: "GIDORA",
	category: "Pokemon",
	hp: 140,
	types: ["Colorless"],

	description: {
		'zh-tw': "擁有高度的飛行能力。雌性擅於持久，雄性擅長速度。"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'zh-tw': "起風"
		},

		damage: 30,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "颶風之翼"
		},

		effect: {
			'zh-tw': "擲4次硬幣，造成正面出現的次數×70點傷害。"
		},

		damage: "70×",
		cost: ["Colorless", "Colorless"]
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
	regulationMark: "F"
}

export default card