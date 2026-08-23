import { Card } from "../../../interfaces"
import Set from "../CBB3C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "沙奈朵ex",
	},

	illustrator: "N-DESIGN Inc.",
	category: "Pokemon",
	hp: 310,
	types: ["Psychic"],
	evolveFrom: {
		'zh-cn': "奇鲁莉安",
	},
	stage: "Stage2",
	suffix: "ex",
	abilities: [
		{
			type: "Ability",
			name: { 'zh-cn': "精神拥抱" },
			effect: { 'zh-cn': "在自己的回合可以使用任意次。选择自己弃牌区中的1张「基本【超】能量」，附着于自己的【超】宝可梦身上。然后，在被附着的宝可梦身上放置2个伤害指示物。（对会被【昏厥】的宝可梦，无法使用这个特性。）" },
		},
	],
	attacks: [
		{
			cost: ["Psychic", "Psychic", "Colorless"],
			name: { 'zh-cn': "奇迹之力" },
			effect: { 'zh-cn': "将这只宝可梦的特殊状态，全部恢复。" },
			damage: 190,
		},
	],
	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],
	retreat: 2,
	regulationMark: "G",
	rarity: "Rare",
	dexId: [282],
}

export default card
