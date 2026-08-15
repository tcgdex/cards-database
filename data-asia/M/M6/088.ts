import { Card } from "../../../interfaces";
import Set from "../M6";

const card: Card = {
	set: Set,
	name: {
		ja: "カクレオン",
	},

	illustrator: "Tomokazu Komiya",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "カラフルウィップ" },
			damage: "30×",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "自分の手札からポケモンを好きなだけ相手に見せて、見せたポケモンのタイプの数×30ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 900114,
				tcgplayer: 709241,
			},
		},
	],

	retreat: 2,
	regulationMark: "J",
	rarity: "Mega Hyper Rare",
	dexId: [352],
};

export default card;
