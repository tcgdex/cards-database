import { Card } from "models/database/card";
import Set from "../SM7a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "シシコ",
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 60,
	types: ["Fire"],

	description: {
		'ja-jp': "強くなるため 群れを 離れて １匹で 生活するようになる。 血気盛んで ケンカっ早い。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ワイルドダッシュ" },
			effect: {
				'ja-jp': "相手の場に「ポケモンGX・EX」がいるなら、このポケモンのにげるためのエネルギーは、すべてなくなる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "とっしん" },
			damage: 30,
			cost: ["Colorless", "Colorless"],
			effect: {
				'ja-jp': "このポケモンにも10ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558903,
			},
		},
	],

	retreat: 2,
	rarity: "Common",
	dexId: [667],
};

export default card;
