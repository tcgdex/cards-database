import { Card } from "../../../interfaces"
import Set from "../CBB3C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "梦妖魔",
	},

	illustrator: "Atsushi Furusawa",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],
	evolveFrom: {
		'zh-cn': "梦妖",
	},
	stage: "Stage1",
	abilities: [
		{
			type: "Ability",
			name: { 'zh-cn': "魔法轻弹" },
			effect: { 'zh-cn': "在自己的回合，当将这张卡牌从手牌使出并进行进化时，可使用1次。选择对手战斗宝可梦身上附着的1个能量，转附于对手的备战宝可梦身上。" },
		},
	],
	attacks: [
		{
			cost: ["Psychic", "Colorless"],
			name: { 'zh-cn': "念动弹" },
			damage: 60,
		},
	],
	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],
	retreat: 1,
	regulationMark: "G",
	rarity: "Rare",
	dexId: [429],
}

export default card
