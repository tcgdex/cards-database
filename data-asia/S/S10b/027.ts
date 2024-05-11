import { Card } from "../../../interfaces"
import Set from "../S10b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "皮卡丘"
	},

	illustrator: "N-DESIGN Inc.",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	description: {
		'zh-tw': "越是能製造出強大電流的皮卡丘，臉頰上的囊就越柔軟，同時也越有伸展性。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "好友伏特"
		},

		effect: {
			'zh-tw': "在這個回合，若從手牌使出了支援者卡，則增加30點傷害。"
		},

		damage: "30+",
		cost: ["Lightning", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card