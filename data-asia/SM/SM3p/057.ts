import { Card } from "../../../interfaces";
import Set from "../SM3p";

const card: Card = {
	set: Set,
	name: {
		ja: "ひかるレックウザ",
	},

	illustrator: "Naoki Saito",
	category: "Pokemon",
	hp: 120,
	types: ["Dragon"],

	description: {
		ja: "雲より はるか上の オゾン層に 生息しているため 地上から 姿を 見ることは できない。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "りゅうのはどう" },
			damage: 40,
			cost: ["Lightning"],
			effect: {
				ja: "自分の山札を上から2枚トラッシュする。",
			},
		},
		{
			name: { ja: "てんくうのさばき" },
			damage: 190,
			cost: ["Fire", "Lightning", "Lightning", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーを、3個トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Fairy", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 560215,
			},
		},
	],

	retreat: 3,
	rarity: "Shiny Ultra Rare",
	dexId: [384],
};

export default card;
