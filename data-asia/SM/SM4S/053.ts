import { Card } from "../../../interfaces";
import Set from "../SM4S";

const card: Card = {
	set: Set,
	name: {
		ja: "カミツルギGX",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 170,
	types: ["Metal"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "きりすてる" },
			effect: {
				ja: "自分の番に、このカードを手札からベンチに出したとき、1回使える。相手の場のポケモンについている特殊エネルギーを、1個トラッシュする。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "はやてのたち" },
			damage: 70,
			cost: ["Metal", "Colorless", "Colorless"],
			effect: {
				ja: "のぞむなら、このポケモンと、ついているすべてのカードを、自分の山札にもどして切る。",
			},
		},
		{
			name: { ja: "スラッシュGX" },
			cost: ["Metal"],
			effect: {
				ja: "自分のサイドを1枚とる。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 560365,
			},
		},
	],

	retreat: 1,
	rarity: "Ultra Rare",
	dexId: [798],

	suffix: "GX",
};

export default card;
