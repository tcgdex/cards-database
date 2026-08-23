import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "烈雀",
	},

	illustrator: "Gemi",
	category: "Pokemon",
	hp: 50,
	types: ["Colorless"],
	description: {
		'zh-cn': "翅膀短，无法飞远。会跳来跳去忙个不停地啄食虫宝可梦。",
	},
	stage: "Basic",
	abilities: [
		{
			type: "Ability",
			name: { 'zh-cn': "抢先进化" },
			effect: { 'zh-cn': "这只宝可梦，如果是后攻玩家的最初回合的话，则即使刚刚出场也可进行进化。" },
		},
	],
	attacks: [
		{
			cost: ["Colorless"],
			name: { 'zh-cn': "高速飞行" },
			damage: 10,
		},
	],
	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],
	retreat: 1,
	regulationMark: "G",
	rarity: "Common",
	dexId: [21],
}

export default card
