import { Card } from "../../../interfaces"
import Set from "../S10D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "毛頭小鷹"
	},

	illustrator: "Eri Yamaki",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		'zh-tw': "雖然還是雛鳥，但性情暴躁易怒。 經常藉故向親鳥挑起鬥爭， 為展示自己的力量而奮力搏擊。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "鉤爪"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為反面，則這個招式失敗。"
		},

		damage: 30,
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
	regulationMark: "F"
}

export default card