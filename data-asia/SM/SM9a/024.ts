import { Card } from "../../../interfaces";
import Set from "../SM9a";

const card: Card = {
	set: Set,
	name: {
		ja: "グライオン",
	},

	illustrator: "Mizue",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],

	description: {
		ja: "尻尾で 木の枝に ぶら下がり 獲物を 観察する。 すきを 見て 上空から 襲いかかる。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "もってくる" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札を3枚引く。",
			},
		},
		{
			name: { ja: "どくづき" },
			damage: 70,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをどくにする。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558211,
			},
		},
	],

	evolveFrom: {
		ja: "グライガー",
	},

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [472],
};

export default card;
