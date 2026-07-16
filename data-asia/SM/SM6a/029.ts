import { Card } from "../../../interfaces";
import Set from "../SM6a";

const card: Card = {
	set: Set,
	name: {
		ja: "ビブラーバ",
	},

	illustrator: "Ken Sugimori",
	category: "Pokemon",
	hp: 80,
	types: ["Dragon"],

	description: {
		ja: "ハネを 成長 させるために 毎日 大量の 獲物を 消化液で 溶かして すする。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ソニックエッジ" },
			damage: 50,
			cost: ["Fighting", "Colorless"],
			effect: {
				ja: "このワザのダメージは、相手のバトルポケモンにかかっている効果を計算しない。",
			},
		},
	],

	weaknesses: [{ type: "Fairy", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559295,
			},
		},
	],

	evolveFrom: {
		ja: "ナックラー",
	},

	retreat: 1,
	rarity: "Common",
	dexId: [329],
};

export default card;
