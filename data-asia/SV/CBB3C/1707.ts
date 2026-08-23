import { Card } from "../../../interfaces"
import Set from "../CBB3C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "墓扬犬ex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 260,
	types: ["Psychic"],
	evolveFrom: {
		'zh-cn': "墓仔狗",
	},
	stage: "Stage1",
	suffix: "ex",
	attacks: [
		{
			cost: ["Psychic"],
			name: { 'zh-cn': "啃住" },
			effect: { 'zh-cn': "在下一个对手的回合，受到这个招式影响的宝可梦，无法撤退。" },
			damage: 30,
		},
		{
			cost: ["Psychic", "Colorless", "Colorless"],
			name: { 'zh-cn': "扫墓" },
			effect: { 'zh-cn': "追加造成自己弃牌区中【超】宝可梦的张数×10伤害。" },
			damage: "160+",
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
