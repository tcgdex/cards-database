import { Card } from "models/database/card";
import Set from "../SM6a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "カイリューGX",
	},

	illustrator: "",
	category: "Pokemon",
	hp: 250,
	types: ["Dragon"],

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "ドラゴンクロー" },
			damage: 70,
			cost: ["Lightning"],
		},
		{
			name: { ja: "ギガインパクト" },
			damage: 200,
			cost: ["Water", "Lightning", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "次の自分の番、このポケモンはワザが使えない。",
			},
		},
		{
			name: { ja: "ドラゴンポーターGX" },
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "自分のトラッシュにある[竜]ポケモンを3枚、ベンチに出す。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Fairy", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 559395,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ハクリュー",
	},

	retreat: 3,
	rarity: "Hyper rare",
	dexId: [149],

	suffix: "GX",
};

export default card;
