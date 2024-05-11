import { Card } from "../../../interfaces"
import Set from "../S10a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "洗翠 幽尾玄魚"
	},

	illustrator: "AKIRA EGAWA",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	description: {
		'zh-tw': "在溯河而上的旅程中半途喪命者的靈魂纏繞其身。在流經洗翠地區 的河川裡可謂所向無敵。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "攀聖靈"
		},

		effect: {
			'zh-tw': "在給對手看過自己的棄牌區的所有基本能量卡後，造成其張數×20點傷害。然後，將給對手看過的能量卡放回牌庫並重洗。"
		},

		damage: "20×"
	}, {
		name: {
			'zh-tw': "水射擊"
		},

		effect: {
			'zh-tw': "選擇1個這隻寶可夢身上附加的能量，將其丟棄。"
		},

		damage: 70,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card