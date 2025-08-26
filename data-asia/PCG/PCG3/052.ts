import { Card } from "../../../interfaces"
import Set from "../PCG3"

const card: Card = {
	set: Set,
	name: {
		ja: "ダークマロワック",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [105],
	hp: 70,
	types: ["Fighting"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "ブリックスマッシュ",
			},
			effect: {
				ja: "この攻撃の損傷は、抵抗、ポケの提唱、ポケボディ、または防御ポケモンに対するその他の影響の影響を受けません。",
			},
			damage: 30,
		},
		{
			cost: ["Fighting", "Fighting", "Colorless"],
			name: {
				ja: "硬い骨",
			},
			effect: {
				ja: "あなたの手から基本的なポケモンまたは進化カードを捨てるか、この攻撃は何もしません。",
			},
			damage: 70,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			subtype: "unlimited",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};

export default card
