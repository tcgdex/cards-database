import { Card } from "models/database/card";
import Set from "../SM6b";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "イワーク",
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],

	description: {
		'ja-jp': "普段は 土の中に 住んでいる。 地中を 時速８０キロで 掘りながら エサを 探す。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "いやなおと" },
			cost: ["Colorless"],
			effect: {
				'ja-jp': "次の自分の番、このワザを受けたポケモンが受けるワザのダメージは「+20」される。",
			},
		},
		{
			name: { ja: "いかり" },
			damage: "10+",
			cost: ["Fighting", "Fighting"],
			effect: {
				'ja-jp': "このポケモンにのっているダメカンの数x10ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559182,
			},
		},
	],

	retreat: 2,
	rarity: "Common",
	dexId: [95],
};

export default card;
