import { Card } from "../../../interfaces"
import Set from "../SC2b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "火箭雀"
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	description: {
		'zh-tw': "從鳥嘴裡噴出火花擊向獵物。會把捉到的獵物烤過之後再享用。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "灼燒"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【灼傷】。"
		},

		damage: 20,
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
	regulationMark: "D"
}

export default card
