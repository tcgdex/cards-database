import { Card } from "models/database/card";
import Set from "../S10a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ヒスイ ゾロアークV",
		'zh-tw': "洗翠 索羅亞克V",
	},

	illustrator: "aky CG Works",
	category: "Pokemon",
	hp: 210,
	types: ["Colorless"],

	stage: "Basic",

	attacks: [
		{
			name: {
				'ja-jp': "うつろがえり",
				'zh-tw': "虛無折返",
			},
			damage: 30,
			cost: [],
			effect: {
				'ja-jp': "のぞむなら、このポケモンをベンチポケモンと入れ替える。",
				'zh-tw': "若希望，將這隻寶可夢與備戰寶可夢互換。",
			},
		},
		{
			name: {
				'ja-jp': "シャドーサイクロン",
				'zh-tw': "暗影旋風",
			},
			damage: 130,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "このポケモンについているエネルギーを1個選び、ベンチポケモンにつけ替える。",
				'zh-tw': "選擇1個這隻寶可夢身上附加的能量，改附於備戰寶可夢身上。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 656385,
				tcgplayer: 570724,
			},
		},
	],

	retreat: 2,
	regulationMark: "F",
	rarity: "Double rare",
	dexId: [571],
};

export default card;
