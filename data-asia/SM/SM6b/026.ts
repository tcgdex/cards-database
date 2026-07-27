import { Card } from "../../../interfaces";
import Set from "../SM6b";

const card: Card = {
	set: Set,
	name: {
		ja: "ゴクリン",
	},

	illustrator: "Yuka Morii",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		ja: "なんでも 消化する 胃袋。 消化する ときに 発生する ガスは 強烈な 悪臭だ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "あくび" },
			cost: ["Colorless"],
			effect: {
				ja: "相手のバトルポケモンをねむりにする。",
			},
		},
		{
			name: { ja: "どくえき" },
			cost: ["Psychic"],
			effect: {
				ja: "相手のバトルポケモンをどくにする。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559176,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [316],
};

export default card;
