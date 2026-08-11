import { Card } from "../../../interfaces"
import Set from "../S10b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "美錄梅塔"
	},

	illustrator: "Shigenori Negishi",
	category: "Pokemon",
	hp: 160,
	types: ["Metal"],

	description: {
		'zh-tw': "擁有產出鐵的力量，因而受到 人們的崇拜。不知為何，在經過 3000年的時間後甦醒過來。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "頭錘"
		},

		damage: 60,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "橫掃粉碎"
		},

		effect: {
			'zh-tw': "擲2次硬幣，增加正面出現的次數×90點傷害。"
		},

		damage: "30+",
		cost: ["Metal", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 4,
	regulationMark: "F"
}

export default card