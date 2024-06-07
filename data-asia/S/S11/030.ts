import { Card } from "../../../interfaces"
import Set from "../S11"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "酋雷姆VMAX"
	},

	illustrator: "N-DESIGN Inc.",
	category: "Pokemon",
	hp: 330,
	types: ["Water"],
	stage: "VMAX",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "白銀世界"
		},

		effect: {
			'zh-tw': "在自己的回合時，可使用1次。將自己的牌庫上方1張卡丟棄，若那張卡為【水】能量卡，則附於自己的寶可夢身上。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "極巨冰霜"
		},

		effect: {
			'zh-tw': "將這隻寶可夢身上附加的任意數量的【水】能量卡丟棄，增加其張數×50點傷害。"
		},

		damage: "120+",
		cost: ["Water", "Water", "Water"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "F"
}

export default card