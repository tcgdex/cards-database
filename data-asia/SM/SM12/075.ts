import { Card } from "../../../interfaces";
import Set from "../SM12";

const card: Card = {
	set: Set,
	name: {
		ja: "エイパム",
	},

	illustrator: "Miki Tanaka",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		ja: "シッポで いろんなことを していたら 手先は 不器用に なってしまった。 高い 木の上に 巣を 作る。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ちょろちょろテール" },
			effect: {
				ja: "自分の番に1回使える。相手の山札を上から1枚、オモテを見ないで、相手の山札の下にもどす。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "しっぽでたたく" },
			damage: 20,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 554973,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [190],
};

export default card;
