import { Card } from "../../../interfaces"
import Set from "../SC2b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "佛烈托斯"
	},

	illustrator: "Atsuko Nishida",
	category: "Pokemon",
	hp: 120,
	types: ["Metal"],

	description: {
		'zh-tw': "本體在鋼鐵外殼的裡面。雖然捕捉獵物時會打開外殼，但速度太快無法看清裡面的樣子。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "猛撞"
		},

		effect: {
			'zh-tw': "這隻寶可夢也受到30點傷害。"
		},

		damage: 120,
		cost: ["Metal", "Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "同歸轟炸"
		},

		effect: {
			'zh-tw': "將雙方的戰鬥寶可夢【氣絕】。"
		},

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

	retreat: 3,
	regulationMark: "D"
}

export default card
