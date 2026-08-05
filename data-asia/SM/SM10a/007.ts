import { Card } from "../../../interfaces";
import Set from "../SM10a";

const card: Card = {
	set: Set,
	name: {
		ja: "シャンデラ",
	},

	illustrator: "kirisAki",
	category: "Pokemon",
	hp: 140,
	types: ["Fire"],

	description: {
		ja: "シャンデラの 炎に 包まれると 魂が 吸い取られ 燃やされる。 抜け殻の 体 だけが 残る。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "ソウルバーナー" },
			damage: "10+",
			cost: ["Fire"],
			effect: {
				ja: "自分の山札を上から5枚トラッシュし、その中のポケモンの枚数×60ダメージ追加。その後、トラッシュされた[炎]ポケモンを、好きなだけベンチに出す。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 557284,
			},
		},
	],

	evolveFrom: {
		ja: "ランプラー",
	},

	retreat: 2,
	regulationMark: "C",
	rarity: "Rare",
	dexId: [609],
};

export default card;
