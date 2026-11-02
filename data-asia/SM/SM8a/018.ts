import { Card } from "../../../interfaces";
import Set from "../SM8a";

const card: Card = {
	set: Set,
	name: {
		ja: "アローラベトベター",
	},

	illustrator: "SATOSHI NAKAI",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		ja: "結晶は 毒素の 塊。 ベトベターの 身体から 落ちると 死に至る 毒素が 漏れだすぞ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ケミカルブレス" },
			damage: "20+",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンが受けている特殊状態の数x50ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558592,
			},
		},
	],

	retreat: 3,
	rarity: "Common",
	dexId: [88],
};

export default card;
