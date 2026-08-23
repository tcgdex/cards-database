import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "超音蝠",
	},

	illustrator: "Scav",
	category: "Pokemon",
	hp: 40,
	types: ["Darkness"],
	description: {
		'zh-cn': "栖息在晒不到阳光的洞窟里。到了早晨便会和同伴聚集起来，一边互相取暖一边睡觉。",
	},
	stage: "Basic",
	abilities: [
		{
			type: "Ability",
			name: { 'zh-cn': "全视回响" },
			effect: { 'zh-cn': "如果这只宝可梦在战斗场上的话，则在自己的回合可以使用1次。查看对手的手牌。" },
		},
	],
	attacks: [
		{
			cost: ["Colorless"],
			name: { 'zh-cn': "咬住" },
			damage: 10,
		},
	],
	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],
	retreat: 1,
	regulationMark: "G",
	rarity: "Common",
	dexId: [41],
}

export default card
