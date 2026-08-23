import { Card } from "../../../interfaces"
import Set from "../CBB1C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "帕底亚 乌波",
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],
	stage: "Basic",
	attacks: [
		{
			cost: ["Colorless"],
			name: { 'zh-cn': "找寻巢穴" },
			effect: { 'zh-cn': "选择自己牌库中的1张竞技场，在给对手看过之后，加入手牌，并重洗牌库。" },
		},
		{
			cost: ["Darkness"],
			name: { 'zh-cn': "冲撞" },
			damage: 10,
		},
	],
	weaknesses: [{ type: "Fighting", value: "x2" }],
	retreat: 2,
	regulationMark: "G",
	rarity: "Uncommon",
	dexId: [194],
}

export default card
