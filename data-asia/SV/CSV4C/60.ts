import { Card } from '../../../interfaces'
import Set from '../CSV4C'

const card: Card = {
	name: {
		'zh-cn': "虫甲圣"
	},
	illustrator: "Oswaldo KATO",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	dexId: [954],
	hp: 70,
	types: ["Psychic"],
	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'zh-cn': "复生祈祷"
			},
			effect: {
				'zh-cn': "选择自己弃牌区中的1张宝可梦，放于备战区。"
			},
		},
		{
			cost: ["Psychic", "Psychic"],
			name: {
				'zh-cn': "幻象光线"
			},
			effect: {
				'zh-cn': "令对手的战斗宝可梦陷入【混乱】状态。"
			},
			damage: "50",
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
	retreat: 1,
	regulationMark: "G",
}

export default card
