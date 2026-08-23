import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "大针蜂",
	},

	illustrator: "nisimono",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],
	evolveFrom: {
		'zh-cn': "铁壳蛹",
	},
	description: {
		'zh-cn': "有时会成群结队地出现。能以超快的速度飞来飞去，并用尾部的毒针不断刺击对手。",
	},
	stage: "Stage2",
	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: { 'zh-cn': "逆境尖刺" },
			effect: { 'zh-cn': "如果自己没有手牌的话，则追加造成120伤害，令对手的战斗宝可梦陷入【中毒】和【麻痹】状态。" },
			damage: "30+",
		},
		{
			cost: ["Grass", "Grass"],
			name: { 'zh-cn': "突刺" },
			damage: 110,
		},
	],
	weaknesses: [{ type: "Fire", value: "x2" }],
	retreat: 1,
	regulationMark: "G",
	rarity: "Rare",
	dexId: [15],
}

export default card
