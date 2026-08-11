import { Card } from "../../../interfaces"
import Set from "../SI"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "酋雷姆"
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	hp: 120,
	types: ["Dragon"],
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