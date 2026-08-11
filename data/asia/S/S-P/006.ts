import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒバニー",
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 60,
	types: ["Fire"],

	description: {
		ja: "走りまわって 体温を 上げると 炎エネルギーが 体を 巡り 本来の 力を 発揮できる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "さきどり" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札を1枚引く。",
			},
		},
		{
			name: { ja: "ひだね" },
			damage: 20,
			cost: ["Fire", "Fire"],
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 597233,
			},
		},
	],

	retreat: 1,
	regulationMark: "D",
	rarity: "Promo",
	dexId: [813],
};

export default card;
