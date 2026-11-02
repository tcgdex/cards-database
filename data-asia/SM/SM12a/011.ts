import { Card } from "../../../interfaces";
import Set from "../SM12a";

const card: Card = {
	set: Set,
	name: {
		ja: "シェイミ",
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	description: {
		ja: "グラシデアの花が 咲く 季節 感謝の 心を 届けるために 飛び立つと 言われている。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "フラワーストーム" },
			damage: "30×",
			cost: ["Grass", "Grass"],
			effect: {
				ja: "自分の場のポケモンについている基本エネルギーの数x30ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 543446,
			},
		},
	],

	retreat: 0,
	regulationMark: "B",
	rarity: "None",
	dexId: [492],
};

export default card;
