import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "百变怪",
	},

	illustrator: "0313",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],
	description: {
		'zh-cn': "虽然可以变身得很完美，但一旦被逗笑，就会因松懈而解除变身。",
	},
	stage: "Basic",
	abilities: [
		{
			type: "Ability",
			name: { 'zh-cn': "变身启动" },
			effect: { 'zh-cn': "如果这只宝可梦在战斗场上的话，则仅在最初的自己的回合可以使用1次。选择自己牌库中的1张【基础】宝可梦（除「百变怪」外）。然后，将这只宝可梦，以及放于其身上的所有卡牌放于弃牌区，将被选择的宝可梦放于这只宝可梦原先的位置。并重洗牌库。" },
		},
	],
	attacks: [
		{
			cost: ["Colorless"],
			name: { 'zh-cn': "粘粑粑" },
			damage: 10,
		},
	],
	weaknesses: [{ type: "Fighting", value: "x2" }],
	retreat: 1,
	regulationMark: "G",
	rarity: "Shiny rare",
	dexId: [132],
}

export default card
