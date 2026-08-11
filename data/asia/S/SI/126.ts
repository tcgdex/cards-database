import { Card } from "../../../interfaces"
import Set from "../SI"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "白馬蕾冠王VMAX"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 320,
	types: ["Water"],
	stage: "VMAX",

	attacks: [{
		name: {
			'zh-tw': "君王騎行"
		},

		effect: {
			'zh-tw': "增加對手的備戰寶可夢的數量×30點傷害。"
		},

		damage: "10+",
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "極巨之矛"
		},

		effect: {
			'zh-tw': "若希望，選擇最多2張這隻寶可夢身上附加的能量卡，將其丟棄。這個情況下，增加丟棄的張數×120點傷害。"
		},

		damage: "10+",
		cost: ["Water", "Water"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card