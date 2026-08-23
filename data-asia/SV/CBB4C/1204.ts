import { Card } from "../../../interfaces"
import Set from "../CBB4C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "雪妖女",
	},

	illustrator: "Makura Tami",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],
	evolveFrom: {
		'zh-cn': "雪童子",
	},
	stage: "Stage1",
	abilities: [
		{
			type: "Ability",
			name: { 'zh-cn': "冻结帷幕" },
			effect: { 'zh-cn': "只要这只宝可梦在场上，每当宝可梦检查时，给双方所有拥有特性的宝可梦（除「雪妖女」外）身上，各放置1个伤害指示物。" },
		},
	],
	attacks: [
		{
			cost: ["Water", "Colorless"],
			name: { 'zh-cn': "冰霜粉碎" },
			damage: 60,
		},
	],
	weaknesses: [{ type: "Metal", value: "x2" }],
	retreat: 1,
	regulationMark: "H",
	rarity: "Uncommon",
	dexId: [478],
}

export default card
