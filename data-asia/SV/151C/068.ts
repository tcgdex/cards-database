import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "怪力",
	},

	illustrator: "Ryuta Fuse",
	category: "Pokemon",
	hp: 180,
	types: ["Fighting"],
	evolveFrom: {
		'zh-cn': "豪力",
	},
	description: {
		'zh-cn': "４只手臂在思考之前就会反射性地行动，使出多发拳击。",
	},
	stage: "Stage2",
	abilities: [
		{
			type: "Ability",
			name: { 'zh-cn': "毅力" },
			effect: { 'zh-cn': "当这只宝可梦，受到招式的伤害而【昏厥】时，自己抛掷1次硬币。如果为正面，则这只宝可梦不会【昏厥】，而是以剩余HP为「10」的状态留在场上。" },
		},
	],
	attacks: [
		{
			cost: ["Fighting", "Fighting"],
			name: { 'zh-cn': "劈山断岳" },
			effect: { 'zh-cn': "将对手牌库上方2张卡牌放于弃牌区。" },
			damage: 100,
		},
	],
	weaknesses: [{ type: "Psychic", value: "x2" }],
	retreat: 2,
	regulationMark: "G",
	rarity: "Rare",
	dexId: [68],
}

export default card
