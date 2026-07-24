import { Card } from "../../../interfaces";
import Set from "../SM10b";

const card: Card = {
	set: Set,
	name: {
		ja: "ベロリンガ",
	},

	illustrator: "tetsuya koizumi",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],

	description: {
		ja: "長い ベロで なんでも ベロリと 舐めて 確かめている。 舐められた 部分を 放っておくと かぶれるぞ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "どすこいドロー" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の場のにげるためのエネルギーが4個のポケモンの数ぶん、山札を引く。",
			},
		},
		{
			name: { ja: "ベロではたく" },
			damage: 40,
			cost: ["Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557237,
			},
		},
	],

	retreat: 4,
	regulationMark: "C",
	rarity: "Common",
	dexId: [108],
};

export default card;
