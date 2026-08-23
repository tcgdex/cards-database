import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "大比鸟",
	},

	illustrator: "Oswaldo KATO",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],
	evolveFrom: {
		'zh-cn': "比比鸟",
	},
	description: {
		'zh-cn': "会展开美丽的翅膀威吓对手。能以２马赫的速度在天上飞来飞去。",
	},
	stage: "Stage2",
	attacks: [
		{
			cost: ["Colorless"],
			name: { 'zh-cn': "振翅" },
			damage: 40,
		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: { 'zh-cn': "飞翔" },
			effect: { 'zh-cn': "抛掷1次硬币如果为反面，则这个招式失败。如果为正面，则在下一个对手的回合，这只宝可梦不受到招式的伤害和效果影响。" },
			damage: 150,
		},
	],
	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],
	retreat: 0,
	regulationMark: "G",
	rarity: "Uncommon",
	dexId: [18],
}

export default card
