import { Card } from '../../../interfaces'
import Set from '../CSV4C'

const card: Card = {
	name: {
		'zh-cn': "大比鸟ex"
	},
	illustrator: "takuyoa",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,
	dexId: [18],
	hp: 280,
	types: ["Colorless"],
	suffix: "ex",
	abilities: [
		{
			type: "Ability",
			name: {
				'zh-cn': "音速搜索"
			},
			effect: {
				'zh-cn': "在自己的回合可以使用1次。选择自己牌库中任意1张卡牌，加入手牌。并重洗牌库。在这个回合，如果已经使用了其他的「音速搜索」的话，则无法使用这个特性。"
			},
		},
	],
	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				'zh-cn': "狂风呼啸"
			},
			effect: {
				'zh-cn': "若希望，可将场上的竞技场放于弃牌区。"
			},
			damage: "120",
		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 0,
	regulationMark: "G",
}

export default card
