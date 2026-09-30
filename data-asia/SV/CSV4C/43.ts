import { Card } from '../../../interfaces'
import Set from '../CSV4C'

const card: Card = {
	name: {
		'zh-cn': "呆呆王ex"
	},
	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	set: Set,
	dexId: [199],
	hp: 270,
	types: ["Psychic"],
	suffix: "ex",
	attacks: [
		{
			cost: ["Psychic"],
			name: {
				'zh-cn': "博学"
			},
			effect: {
				'zh-cn': "令对手的战斗宝可梦陷入【混乱】状态。"
			},
			damage: "30",
		},
		{
			cost: ["Psychic", "Psychic"],
			name: {
				'zh-cn': "智慧头击"
			},
			effect: {
				'zh-cn': "若希望，可选择自己牌库中任意卡牌最多2张，加入手牌。并重洗牌库。"
			},
			damage: "130",
		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 3,
	regulationMark: "G",
}

export default card
