import { Card } from '../../../interfaces'
import Set from '../CSV4C'

const card: Card = {
	name: {
		'zh-cn': "呆呆兽"
	},
	illustrator: "sowsow",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	dexId: [79],
	hp: 80,
	types: ["Psychic"],
	attacks: [
		{
			cost: ["Psychic"],
			name: {
				'zh-cn': "尾钓"
			},
			effect: {
				'zh-cn': "抛掷1次硬币如果为正面，则选择自己牌库中任意1张卡牌，加入手牌。并重洗牌库。如果为反面，则选择自己的1张手牌，放于弃牌区。"
			},
		},
		{
			cost: ["Psychic", "Psychic"],
			name: {
				'zh-cn': "意念头锤"
			},
			damage: "30",
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
