import { Card } from "../../../interfaces"
import Set from "../SC2a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "無極汰那VMAX"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 340,
	types: ["Darkness"],
	stage: "VMAX",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "無極領域"
		},

		effect: {
			'zh-tw': "若自己的所有場上寶可夢皆為【惡】屬性則生效。可放置於自己的備戰區的【惡】寶可夢數量改為8隻，其他屬性無法放置於場上。（當這個特性不生效後，將備戰區的寶可夢丟棄直到變為5隻為止。）"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "忌憚之末"
		},

		effect: {
			'zh-tw': "造成自己的場上【惡】寶可夢的數量×30點傷害。"
		},

		damage: "30×",
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "D"
}

export default card
