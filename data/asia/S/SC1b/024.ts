import { Card } from "../../../interfaces"
import Set from "../SC1b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "轟擂金剛猩VMAX"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 330,
	types: ["Grass"],
	stage: "VMAX",

	attacks: [{
		name: {
			'zh-tw': "抓"
		},

		damage: 50,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "極巨連打"
		},

		effect: {
			'zh-tw': "若希望，選擇最多3張這隻寶可夢身上附加的【草】能量卡，將其丟棄。這個情況下，增加丟棄的張數×50點傷害。"
		},

		damage: "130+",
		cost: ["Grass", "Grass", "Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "D"
}

export default card
