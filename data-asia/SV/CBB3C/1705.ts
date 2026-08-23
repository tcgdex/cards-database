import { Card } from "../../../interfaces"
import Set from "../CBB3C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "墓扬犬",
	},

	illustrator: "Saya Tsuruta",
	category: "Pokemon",
	hp: 140,
	types: ["Psychic"],
	evolveFrom: {
		'zh-cn': "墓仔狗",
	},
	stage: "Stage1",
	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: { 'zh-cn': "后踢" },
			damage: 30,
		},
		{
			cost: ["Psychic", "Colorless", "Colorless"],
			name: { 'zh-cn': "拼命" },
			effect: { 'zh-cn': "如果对手的剩余奖赏卡张数为4张、2张的话，则追加造成120伤害。" },
			damage: "80+",
		},
	],
	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],
	retreat: 3,
	regulationMark: "G",
	rarity: "Rare",
	dexId: [972],
}

export default card
