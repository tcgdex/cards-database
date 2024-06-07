import { Card } from "../../../interfaces"
import Set from "../S6H"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "引夢貘人"
	},

	illustrator: "Miki Tanaka",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],

	description: {
		'zh-tw': "為了幫助那些晚上失眠的人，也有些引夢貘人會到醫院去協助醫生。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "不甩人尾"
		},

		effect: {
			'zh-tw': "只要這隻寶可夢在場上，自己的寶可夢身上附加的能量，不會受到對手的物品或者支援者的效果影響而丟棄與放回手牌或牌庫。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "咬"
		},

		damage: 90,
		cost: ["Colorless", "Colorless", "Colorless"]
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