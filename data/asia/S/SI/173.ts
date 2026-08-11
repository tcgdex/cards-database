import { Card } from "../../../interfaces"
import Set from "../SI"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "太陽伊布VMAX"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 310,
	types: ["Psychic"],
	stage: "VMAX",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "太陽啟示"
		},

		effect: {
			'zh-tw': "只要這隻寶可夢在場上，自己的所有身上附有能量的寶可夢，不會受到對手的寶可夢使用招式的效果的影響。（已經受到的效果無法消除。）"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "極巨超能"
		},

		effect: {
			'zh-tw': "造成對手的場上寶可夢身上附加的能量的數量×60點傷害。"
		},

		damage: "60×",
		cost: ["Psychic", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card