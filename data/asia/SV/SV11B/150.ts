import { Card } from "models/database/card";
import Set from "../SV11B";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "キバゴ",
	},

	illustrator: "Ayako Ozaki",
	category: "Pokemon",
	hp: 70,
	types: ["Dragon"],

	description: {
		'ja-jp': "木の実を キバで 砕いて 食べる。 何回も 生え変わることで 強く 鋭い キバに なる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ちからをあつめる" },
			cost: ["Colorless"],
			effect: {
				'ja-jp': "自分の山札から基本エネルギーを2枚まで選び、相手に見せて、手札に加える。そして山札を切る。",
			},
		},
	],

	weaknesses: [],
	resistances: [],

	variants: [{ type: "holo" }],

	retreat: 2,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [610],

	thirdParty: {
		cardmarket: 829409,
		tcgplayer: 636504,
	},
};

export default card;
