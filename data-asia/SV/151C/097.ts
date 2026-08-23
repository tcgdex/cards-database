import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "引梦貘人",
	},

	illustrator: "Mousho",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],
	evolveFrom: {
		'zh-cn': "催眠貘",
	},
	description: {
		'zh-cn': "据说对手与它视线相对时，它就会使出催眠术等多种多样的超能力。",
	},
	stage: "Stage1",
	abilities: [
		{
			type: "Ability",
			name: { 'zh-cn': "登场催眠" },
			effect: { 'zh-cn': "在自己的回合，当将这张卡牌从手牌使出并进行进化时，可使用1次。令对手的战斗宝可梦陷入【睡眠】状态。" },
		},
	],
	attacks: [
		{
			cost: ["Psychic", "Psychic", "Colorless"],
			name: { 'zh-cn': "超念力" },
			damage: 110,
		},
	],
	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],
	retreat: 2,
	regulationMark: "G",
	rarity: "Uncommon",
	dexId: [97],
}

export default card
