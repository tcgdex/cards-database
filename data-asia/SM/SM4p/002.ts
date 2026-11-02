import { Card } from "../../../interfaces";
import Set from "../SM4p";

const card: Card = {
	set: Set,
	name: {
		ja: "カイロス",
	},

	illustrator: "DemizuPosuka",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],

	description: {
		ja: "角の 一撃は 大木 さえ へし折るほど。 アローラでは クワガノンが 最大の ライバル。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "てんじょうなげ" },
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンと、ついているすべてのカードを、相手の手札にもどす。",
			},
		},
		{
			name: { ja: "ハサミギロチン" },
			damage: 50,
			cost: ["Grass", "Grass"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560035,
			},
		},
	],

	retreat: 2,
	rarity: "None",
	dexId: [127],
};

export default card;
