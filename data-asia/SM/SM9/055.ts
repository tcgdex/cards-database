import { Card } from "../../../interfaces";
import Set from "../SM9";

const card: Card = {
	set: Set,
	name: {
		ja: "エビワラー",
	},

	illustrator: "Tomokazu Komiya",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],

	description: {
		ja: "腕を ねじりながら 繰り出す パンチは コンクリートも 粉砕。 ３分 戦うと ひとやすみする。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ヒット&amp;アウェー" },
			damage: 30,
			cost: ["Fighting"],
			effect: {
				ja: "のぞむなら、このポケモンをベンチポケモンと入れ替える。",
			},
		},
		{
			name: { ja: "マグナムパンチ" },
			damage: 70,
			cost: ["Fighting", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558381,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [107],
};

export default card;
