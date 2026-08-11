import { Card } from "models/database/card";
import Set from "../SV11B";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "プロトーガ",
	},

	illustrator: "Akino Fukuji",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],

	description: {
		'ja-jp': "古代の 化石から 復活した。 深さ １０００メートルまで 潜水することが できる。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "たいこのもくず" },
			damage: "30x",
			cost: ["Water"],
			effect: { ja: "相手のトラッシュにあるグッズの枚数×30ダメージ。" },
		},
		{
			name: { ja: "なみのり" },
			damage: 80,
			cost: ["Water", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [{ type: "holo" }],

	evolveFrom: {
		'ja-jp': "古びたふたの化石",
	},

	retreat: 3,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [564],

	thirdParty: {
		cardmarket: 829353,
		tcgplayer: 636464,
	},
};

export default card;
