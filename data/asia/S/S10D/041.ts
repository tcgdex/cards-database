import { Card } from "../../../interfaces"
import Set from "../S10D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "洗翠 大劍鬼"
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 170,
	types: ["Darkness"],

	description: {
		'zh-tw': "性情與刀路皆是殘酷無情。連綿不斷的攻擊彷如千層浪濤。 此乃只在洗翠進化而成的稀有姿態。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "謀士之勢"
		},

		effect: {
			'zh-tw': "在自己的回合時，若將自己的1張手牌丟棄，則可使用1次。從自己的牌庫抽出3張卡。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "暗之極意"
		},

		effect: {
			'zh-tw': "增加自己的場上寶可夢身上附加的能量的數量×20點傷害。"
		},

		damage: "60+",
		cost: ["Darkness", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card