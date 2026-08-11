import { Card } from "../../../interfaces"
import Set from "../SC2b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "基格爾德"
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],

	description: {
		'zh-tw': "細胞聚集了５０％的樣子。會毫不留情地把敵對者全部消滅。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "咬住"
		},

		damage: 30,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "力量爆破"
		},

		effect: {
			'zh-tw': "選擇1個這隻寶可夢身上附加的【鬥】能量，將其丟棄。"
		},

		damage: 130,
		cost: ["Fighting", "Fighting", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "D"
}

export default card
