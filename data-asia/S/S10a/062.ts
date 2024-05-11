import { Card } from "../../../interfaces"
import Set from "../S10a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "洗翠 索羅亞克VSTAR"
	},

	illustrator: "aky CG Works",
	category: "Pokemon",
	hp: 270,
	types: ["Colorless"],
	stage: "VMAX",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "幻影星星"
		},

		effect: {
			'zh-tw': "在自己的回合時可使用。將自己的手牌全部丟棄，從牌庫抽出7張卡。[對戰中，己方只可使用1次【VSTAR】力量。]"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "牢記詛咒"
		},

		effect: {
			'zh-tw': "造成自己的場上身上放置有傷害指示物的寶可夢的數量×50點傷害。"
		},

		damage: "50×",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card