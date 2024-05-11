import { Card } from "../../../interfaces"
import Set from "../S9a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "詭角鹿"
	},

	illustrator: "Mizue",
	category: "Pokemon",
	hp: 140,
	types: ["Psychic"],

	description: {
		'zh-tw': "製造肉眼不可見的障壁時，黑珠會發出妖異的光輝。從牠身上脫落的鬍鬚 是用來製作溫暖冬衣的實用原料。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "快走"
		},

		effect: {
			'zh-tw': "在自己的回合時，可使用1次。從自己的牌庫抽出1張卡。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "神通力"
		},

		effect: {
			'zh-tw': "若自己的手牌的張數與對手的手牌的張數相同，則增加80點傷害。"
		},

		damage: "40+",
		cost: ["Colorless", "Colorless"]
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
	regulationMark: "F"
}

export default card