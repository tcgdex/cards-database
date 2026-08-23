import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "吉利蛋",
	},

	illustrator: "Taiga Kayama",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],
	description: {
		'zh-cn': "性格温柔的宝可梦，会生出营养丰富的蛋分给受伤的宝可梦和人类。",
	},
	stage: "Basic",
	abilities: [
		{
			type: "Ability",
			name: { 'zh-cn': "幸运奖励" },
			effect: { 'zh-cn': "在自己的回合，当从反面朝上的自己的奖赏卡中拿取了这张卡牌时，如果自己的备战区有空位的话，则在加入手牌前可以使用。将这只宝可梦放于自己的备战区。然后，抛掷1次硬币如果为正面，则额外拿取1张奖赏卡。" },
		},
	],
	attacks: [
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: { 'zh-cn': "重掴" },
			damage: 70,
		},
	],
	weaknesses: [{ type: "Fighting", value: "x2" }],
	retreat: 2,
	regulationMark: "G",
	rarity: "Rare",
	dexId: [113],
}

export default card
