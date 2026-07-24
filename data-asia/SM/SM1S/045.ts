import { Card } from "../../../interfaces";
import Set from "../SM1S";

const card: Card = {
	set: Set,
	name: {
		ja: "パッチール",
	},

	illustrator: "Shigenori Negishi",
	category: "Pokemon",
	hp: 80,
	types: ["Colorless"],

	description: {
		ja: "フラフラ おぼつかない 足取りだが パッチール自体は 真っ直ぐに 歩いている つもりだよ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "フラフラパンチ" },
			damage: 30,
			cost: ["Colorless"],
			effect: {
				ja: "相手のバトルポケモンをこんらんにする。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561722,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [327],
};

export default card;
