import { Card } from "../../../interfaces";
import Set from "../SM10a";

const card: Card = {
	set: Set,
	name: {
		ja: "カブルモ",
	},

	illustrator: "Ken Sugimori",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		ja: "チョボマキと 一緒に いるときに 電気的な 刺激を 受けると 進化する 不思議な ポケモンだ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "とっしん" },
			damage: 20,
			cost: ["Colorless"],
			effect: {
				ja: "このポケモンにも10ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557278,
			},
		},
	],

	retreat: 2,
	regulationMark: "C",
	rarity: "Common",
	dexId: [588],
};

export default card;
