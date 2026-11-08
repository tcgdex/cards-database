import { Card } from "models/database/card";
import Set from "../SV11B";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ヒヒダルマ",
	},

	illustrator: "svlt",
	category: "Pokemon",
	hp: 140,
	types: ["Fire"],

	description: {
		'ja-jp': "体内で １４００度の 炎を 燃やすことで ダンプカーを パンチで 破壊するほどの パワーを 作る。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "やきこがす" },
			damage: 50,
			cost: ["Fire", "Colorless"],
			effect: { ja: "相手のバトルポケモンをやけどにする。" },
		},
		{
			name: { ja: "スマッシュヘッド" },
			damage: 180,
			cost: ["Fire", "Colorless", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "このポケモンについているエネルギーを2個選び、トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{ type: "normal" },
		{ type: "reverse", foil: "pokeball" },
		{ type: "reverse", foil: "masterball" },
	],

	evolveFrom: {
		'ja-jp': "ダルマッカ",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [555],

	thirdParty: {
		cardmarket: 828460,
		tcgplayer: 636368,
	},
};

export default card;
