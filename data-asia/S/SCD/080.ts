import { Card } from "../../../interfaces"
import Set from "../SCD"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "鐵掌力士"
	},

	illustrator: "Hitoshi Ariga",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "毅力"
		},

		effect: {
			'zh-tw': "這隻寶可夢受到招式的傷害而【氣絕】時，擲1次硬幣。若為正面，則這隻寶可夢不會【氣絕】，而是以剩餘HP為「10」的狀態留在場上。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "頭突"
		},

		damage: 100,
		cost: ["Fighting", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "E"
}

export default card