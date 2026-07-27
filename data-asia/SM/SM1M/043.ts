import { Card } from "../../../interfaces";
import Set from "../SM1M";

const card: Card = {
	set: Set,
	name: {
		ja: "ハクリュー",
	},

	illustrator: "hatachu",
	category: "Pokemon",
	hp: 90,
	types: ["Dragon"],

	description: {
		ja: "天候を 司る 者として 太古から 農業を 営む 人々に 崇められてきた。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "りゅうのいのり" },
			cost: ["Colorless"],
			effect: {
				ja: "次の自分の番、自分は、手札からエネルギーを何枚でもポケモンにつけられる。",
			},
		},
		{
			name: { ja: "しっぽでたたく" },
			damage: 60,
			cost: ["Grass", "Lightning", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fairy", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561644,
			},
		},
	],

	evolveFrom: {
		ja: "ミニリュウ",
	},

	retreat: 2,
	rarity: "Uncommon",
	dexId: [148],
};

export default card;
