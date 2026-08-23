import { Card } from "../../../interfaces"
import Set from "../CBB4C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "重泥挽马",
	},

	illustrator: "Naoyo Kimura",
	category: "Pokemon",
	hp: 150,
	types: ["Fighting"],
	evolveFrom: {
		'zh-cn': "泥驴仔",
	},
	stage: "Stage1",
	attacks: [
		{
			cost: ["Fighting"],
			name: { 'zh-cn': "贮存泥巴" },
			effect: { 'zh-cn': "给自己所有的备战宝可梦，各附着1张弃牌区中的「基本【斗】能量」。" },
		},
		{
			cost: ["Fighting", "Colorless", "Colorless"],
			name: { 'zh-cn': "十万马力" },
			effect: { 'zh-cn': "给这只宝可梦也造成40伤害。" },
			damage: 140,
		},
	],
	weaknesses: [{ type: "Grass", value: "x2" }],
	retreat: 3,
	regulationMark: "H",
	rarity: "Common",
	dexId: [750],
}

export default card
