import { Card } from "models/database/card";
import Set from "../SM4p";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ライチュウ",
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 110,
	types: ["Lightning"],

	description: {
		'ja-jp': "電撃は １０万ボルトに 達することもあり ヘタに触ると インド象でも 気絶する。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "エボルショック" },
			effect: {
				'ja-jp': "自分の番に、このカードを手札から出して進化させたとき、1回使える。相手のバトルポケモンをマヒにする。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ボルテッカー" },
			damage: 130,
			cost: ["Lightning", "Lightning", "Colorless"],
			effect: {
				'ja-jp': "このポケモンにも30ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Metal", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560062,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ピカチュウ",
	},

	retreat: 1,
	rarity: "None",
	dexId: [26],
};

export default card;
