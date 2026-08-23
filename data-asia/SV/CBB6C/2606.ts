import { Card } from "../../../interfaces"
import Set from "../CBB6C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "够赞狗",
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],
	stage: "Basic",
	abilities: [
		{
			type: "Ability",
			name: { 'zh-cn': "亢奋力量" },
			effect: { 'zh-cn': "如果这只宝可梦身上附着了【恶】能量的话，则这只宝可梦的最大HP「+100」，这只宝可梦所使用的招式，给对手的战斗宝可梦造成的伤害「+100」。" },
		},
	],
	attacks: [
		{
			cost: ["Fighting", "Fighting"],
			name: { 'zh-cn': "够赞拳" },
			damage: 70,
		},
	],
	weaknesses: [{ type: "Psychic", value: "x2" }],
	retreat: 2,
	regulationMark: "H",
	rarity: "Double rare",
	dexId: [1014],
}

export default card
