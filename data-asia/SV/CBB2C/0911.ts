import { Card } from "../../../interfaces"
import Set from "../CBB2C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "仙子伊布",
	},

	illustrator: "Naoyo Kimura",
	category: "Pokemon",
	hp: 110,
	types: ["Fairy"],
	evolveFrom: {
		'zh-cn': "伊布",
	},
	stage: "Stage1",
	attacks: [
		{
			cost: ["Fairy"],
			name: { 'zh-cn': "月亮之力" },
			effect: { 'zh-cn': "在下一个对手的回合，受到这个招式影响的宝可梦所使用的招式的伤害「-30」。" },
			damage: 30,
		},
		{
			cost: ["Fairy", "Colorless", "Colorless"],
			name: { 'zh-cn': "亲密波动" },
			effect: { 'zh-cn': "在这个回合，如果从手牌使出了「TAG TEAM」的支援者的话，则追加造成80点伤害。" },
			damage: "80+",
		},
	],
	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [{ type: "Darkness", value: "-20" }],
	retreat: 2,
	regulationMark: "C",
	rarity: "Double rare",
	dexId: [700],
}

export default card
