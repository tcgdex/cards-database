import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "テツノイワオ",
	},

	illustrator: "GIDORA",
	category: "Pokemon",
	hp: 140,
	types: ["Psychic"],

	description: {
		ja: "金属質の ボディらしい。 名前は 古い 本に 記された 謎の 物体から つけられた。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "アジャストホーン" },
			damage: 170,
			cost: ["Psychic", "Colorless"],
			effect: {
				ja: "自分の手札と相手の手札が同じ枚数でないなら、このワザは失敗。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863662,
			},
		},
	],

	retreat: 3,
	regulationMark: "H",
	rarity: "None",
	dexId: [1022],
};

export default card;
