import { Card } from "../../../interfaces"
import Set from "../S7D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "酋雷姆"
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	hp: 120,
	types: ["Dragon"],

	description: {
		'zh-tw': "在體內製造出強大的冷凍能量，但漏出的寒氣使身體結凍了。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "極限冰凍"
		},

		effect: {
			'zh-tw': "將自己的場上寶可夢身上附加的任意數量的【水】能量卡丟棄，造成其張數×60點傷害。"
		},

		damage: "60×",
		cost: ["Water", "Water", "Metal"]
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card