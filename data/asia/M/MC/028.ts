import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "キノガッサ",
	},

	illustrator: "Taiga Kasai",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	description: {
		ja: "尻尾の タネは 毒の 胞子で できている。 動きが 見えないほど 素早い パンチで 敵を 倒す。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "パンチ" },
			damage: 30,
			cost: ["Colorless"],
		},
		{
			name: { ja: "ナックルインパクト" },
			damage: 120,
			cost: ["Grass", "Colorless"],
			effect: {
				ja: "次の自分の番、このポケモンはワザが使えない。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863319,
			},
		},
	],

	evolveFrom: {
		ja: "キノココ",
	},

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [286],
};

export default card;
