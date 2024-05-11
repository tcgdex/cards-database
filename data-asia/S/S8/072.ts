import { Card } from "../../../interfaces"
import Set from "../S8"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "美錄梅塔"
	},

	illustrator: "Hasuno",
	category: "Pokemon",
	hp: 150,
	types: ["Metal"],

	description: {
		'zh-tw': "擁有產出鐵的力量，因而受到人們的崇拜。不知為何，在經過3000年的時間後甦醒過來。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "鐵塊橫掃"
		},

		effect: {
			'zh-tw': "在下個對手的回合，這隻寶可夢不會受到擁有特性的寶可夢招式的傷害。"
		},

		damage: 80,
		cost: ["Metal", "Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "爆破之錘"
		},

		effect: {
			'zh-tw': "選擇1個這隻寶可夢身上附加的能量，將其丟棄。"
		},

		damage: 150,
		cost: ["Metal", "Metal", "Colorless", "Colorless"]
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
	regulationMark: "E"
}

export default card