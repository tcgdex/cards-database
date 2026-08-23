import { Card } from "../../../interfaces"
import Set from "../CBB3C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "弃世猴",
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],
	evolveFrom: {
		'zh-cn': "火暴猴",
	},
	stage: "Stage2",
	attacks: [
		{
			cost: ["Fighting"],
			name: { 'zh-cn': "愤怒之拳" },
			effect: { 'zh-cn': "造成对手已经获得的奖赏卡张数×70伤害。" },
			damage: "70×",
		},
		{
			cost: ["Fighting", "Fighting"],
			name: { 'zh-cn': "裂爆拳" },
			effect: { 'zh-cn': "给这只宝可梦也造成50伤害。" },
			damage: 170,
		},
	],
	weaknesses: [{ type: "Psychic", value: "x2" }],
	retreat: 2,
	regulationMark: "G",
	rarity: "Common",
	dexId: [979],
}

export default card
