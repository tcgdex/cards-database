import { Card } from "../../../interfaces";
import Set from "../SM11";

const card: Card = {
	set: Set,
	name: {
		ja: "プロトーガ",
	},

	illustrator: "HYOGONOSUKE",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],

	description: {
		ja: "古代の 化石から 復活。 海に 暮らしていたが 獲物を 探して 陸にも あがっていた。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "こうらアタック" },
			damage: 20,
			cost: ["Fighting"],
		},
		{
			name: { ja: "ロックスマッシュ" },
			damage: 60,
			cost: ["Fighting", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 556975,
			},
		},
	],

	retreat: 3,
	regulationMark: "C",
	rarity: "Common",
	dexId: [564],
};

export default card;
