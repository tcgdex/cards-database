import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "パルスワンV",
	},

	illustrator: "GIDORA",
	category: "Pokemon",
	hp: 200,
	types: ["Lightning"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "そうでん" },
			cost: ["Lightning"],
			effect: {
				ja: "自分の山札から[雷]エネルギーを2枚まで選び、ベンチポケモンに好きなようにつける。そして山札を切る。",
			},
		},
		{
			name: { ja: "ライトニングストーム" },
			damage: "10+",
			cost: ["Lightning", "Colorless"],
			effect: {
				ja: "自分の場のポケモンについている[雷]エネルギーの数×30ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 587023,
				tcgplayer: 571477,
			},
		},
	],

	retreat: 2,
	regulationMark: "D",
	rarity: "Character Super Rare",
	dexId: [836],
};

export default card;
