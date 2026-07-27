import { Card } from "../../../interfaces";
import Set from "../SM9a";

const card: Card = {
	set: Set,
	name: {
		ja: "デンヂムシ",
	},

	illustrator: "Sekio",
	category: "Pokemon",
	hp: 80,
	types: ["Lightning"],

	description: {
		ja: "落ち葉に 埋まり ほとんど 動かず ひたすら 腐葉土を 食っている。 間違って 踏むと ビリビリするぞ。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "バッテリー" },
			effect: {
				ja: "このカードが手札にあるなら、自分の番に1回使える。このカードを特殊エネルギーとして自分の「クワガノン（GXをふくむ）」につける。このカードは、ポケモンについているかぎり[雷]エネルギー2個ぶんとしてはたらく。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "つきさす" },
			damage: 60,
			cost: ["Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Metal", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558204,
			},
		},
	],

	evolveFrom: {
		ja: "アゴジムシ",
	},

	retreat: 3,
	regulationMark: "C",
	rarity: "Common",
	dexId: [737],
};

export default card;
