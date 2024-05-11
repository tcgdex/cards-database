import { Card } from "../../../interfaces"
import Set from "../SC1b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "烏賊王VMAX"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 310,
	types: ["Darkness"],
	stage: "VMAX",

	attacks: [{
		name: {
			'zh-tw': "極巨擾亂"
		},

		effect: {
			'zh-tw': "查看對手的手牌，選擇其中1張卡，放回對手的牌庫下方。"
		},

		damage: 180,
		cost: ["Darkness", "Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card
