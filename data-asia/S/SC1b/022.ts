import { Card } from "../../../interfaces"
import Set from "../SC1b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "轟擂金剛猩"
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 170,
	types: ["Grass"],

	description: {
		'zh-tw': "能夠透過打鼓來控制特別的樹樁中的力量，操縱樹根進行戰鬥。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "怒氣律動"
		},

		effect: {
			'zh-tw': "在自己的回合時，可使用1次。從自己的牌庫選擇最多2張【草】能量卡，附於自己的1隻寶可夢身上。並且重洗牌庫。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "頭突"
		},

		damage: 140,
		cost: ["Grass", "Grass", "Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "D"
}

export default card
