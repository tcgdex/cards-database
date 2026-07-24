import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ブニャット",
	},

	illustrator: "Saboteri",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],

	description: {
		ja: "ほかの ポケモンの 住処でも 居心地が 良ければ 居座って 自分の 住処に してしまう。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ごろにゃん" },
			damage: 80,
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージや効果を受けない。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863898,
			},
		},
	],

	evolveFrom: {
		ja: "ニャルマー",
	},

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [432],
};

export default card;
