import { Card } from '../../../interfaces'
import Set from '../CSV4C'

const card: Card = {
	name: {
		'zh-cn': "坚盾剑怪"
	},
	illustrator: "Jiro Sasumo",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	dexId: [681],
	hp: 150,
	types: ["Metal"],
	abilities: [
		{
			type: "Ability",
			name: {
				'zh-cn': "神秘之盾"
			},
			effect: {
				'zh-cn': "这只宝可梦，不受到对手「宝可梦【ex】・【V】」的招式的伤害。"
			},
		},
	],
	attacks: [
		{
			cost: ["Metal", "Colorless"],
			name: {
				'zh-cn': "沉重猛击"
			},
			effect: {
				'zh-cn': "这个招式的伤害，不计算对手战斗宝可梦身上所附加的效果。"
			},
			damage: "120",
		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 3,
	regulationMark: "G",
}

export default card
