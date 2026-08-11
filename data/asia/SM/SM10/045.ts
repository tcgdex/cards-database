import { Card } from "models/database/card";
import Set from "../SM10";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "カラカラ",
	},

	illustrator: "Mizue",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],

	description: {
		'ja-jp': "亡くした 母親を 思い 夜に 泣き叫ぶが そのせいで 天敵の バルジーナに 見つかってしまう。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "きあいだめ" },
			cost: ["Colorless"],
			effect: {
				'ja-jp': "次の自分の番、このポケモンの「たたく」のダメージは「80」になる。",
			},
		},
		{
			name: { ja: "たたく" },
			damage: 10,
			cost: ["Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557400,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [104],
};

export default card;
