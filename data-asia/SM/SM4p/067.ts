import { Card } from "../../../interfaces";
import Set from "../SM4p";

const card: Card = {
	set: Set,
	name: {
		ja: "アローラダグトリオ",
	},

	illustrator: "match",
	category: "Pokemon",
	hp: 100,
	types: ["Metal"],

	description: {
		ja: "金色に 輝く 髭で 身を 守っている。 抜け落ちた 髭を 持ち帰ると 不幸に なると いう。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "カーリーヘアー" },
			effect: {
				ja: "このポケモンがいるかぎり、相手のバトルポケモンのにげるためのエネルギーは、1個ぶん多くなる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "じめんにもぐる" },
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "相手のポケモン1匹に、50ダメージ。このワザのダメージは弱点・抵抗力を計算しない。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560100,
			},
		},
	],

	evolveFrom: {
		ja: "アローラディグダ",
	},

	retreat: 2,
	rarity: "None",
	dexId: [51],
};

export default card;
