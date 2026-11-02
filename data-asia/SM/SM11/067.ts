import { Card } from "../../../interfaces";
import Set from "../SM11";

const card: Card = {
	set: Set,
	name: {
		ja: "ハクリュー",
	},

	illustrator: "sowsow",
	category: "Pokemon",
	hp: 100,
	types: ["Dragon"],

	description: {
		ja: "天候を 操ると 信じられ ハクリューの 棲む 湖には お供え物が 絶えない。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "しっぽではたく" },
			damage: 20,
			cost: ["Colorless"],
		},
		{
			name: { ja: "はかいのうず" },
			damage: 70,
			cost: ["Water", "Lightning", "Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンについているエネルギーを、1個トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Fairy", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557029,
			},
		},
	],

	evolveFrom: {
		ja: "ミニリュウ",
	},

	retreat: 2,
	regulationMark: "C",
	rarity: "Common",
	dexId: [148],
};

export default card;
