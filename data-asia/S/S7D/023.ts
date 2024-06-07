import { Card } from "../../../interfaces"
import Set from "../S7D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "鐵掌力士"
	},

	illustrator: "Hitoshi Ariga",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],

	description: {
		'zh-tw': "體型壯碩的鐵掌力士未必就很強。也有體型雖小，但身輕如燕且技巧高超的鐵掌力士存在。"
	},

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