import { Card } from "../../../interfaces"
import Set from "../SV6"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "幸福蛋ex"
	},

	illustrator: "PLANETA Tsuji",
	category: "Pokemon",
	hp: 300,
	types: ["Colorless"],
	stage: "Stage1",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "幸福切換"
		},

		effect: {
			'zh-tw': "在自己的回合時可使用1次。選擇1個自己的場上寶可夢身上附加的基本能量，改附於自己的其他寶可夢身上。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "報恩"
		},

		effect: {
			'zh-tw': "若希望，從牌庫抽卡直到自己的手牌滿6張為止。"
		},

		damage: 180,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "H"
}

export default card