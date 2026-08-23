import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "大舌贝",
	},

	illustrator: "Nelnal",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	description: {
		'zh-cn': "被比钻石还坚硬的壳所包裹。不过内部却是超乎意料的柔软。",
	},
	stage: "Basic",
	attacks: [
		{
			cost: ["Water", "Water"],
			name: { 'zh-cn': "贝壳压制" },
			effect: { 'zh-cn': "在下一个对手的回合，这只宝可梦所受到的招式的伤害「-30」。" },
			damage: 30,
		},
	],
	weaknesses: [{ type: "Lightning", value: "x2" }],
	retreat: 2,
	regulationMark: "G",
	rarity: "Common",
	dexId: [90],
}

export default card
