import { Card } from '../../../interfaces'
import Set from '../CSV4C'

const card: Card = {
	name: {
		'zh-cn': "普隆隆姆ex"
	},
	illustrator: "takuyoa",
	rarity: "Double rare",
	category: "Pokemon",
	set: Set,
	dexId: [966],
	hp: 280,
	types: ["Metal"],
	suffix: "ex",
	abilities: [
		{
			type: "Ability",
			name: {
				'zh-cn': "调试"
			},
			effect: {
				'zh-cn': "这只宝可梦身上可以最多放4张「宝可梦道具」。（当这个特性失效时，自己将「宝可梦道具」放于弃牌区，直到还剩1张为止。）"
			},
		},
	],
	attacks: [
		{
			cost: ["Metal", "Metal", "Colorless"],
			name: {
				'zh-cn': "疯狂漂移"
			},
			effect: {
				'zh-cn': "在下一个对手的回合，这只宝可梦所受到的招式的伤害「-30」。"
			},
			damage: "170",
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
	retreat: 1,
	regulationMark: "G",
}

export default card
