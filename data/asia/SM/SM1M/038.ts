import { Card } from "models/database/card";
import Set from "../SM1M";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "キバニア",
	},

	illustrator: "Sumiyoshi Kizuki",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],

	description: {
		'ja-jp': "わずかな 血の 匂いを 嗅ぎつけ 集団で 獲物を 襲う。 １匹では 結構 おくびょう。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "かじりとる" },
			cost: ["Colorless"],
			effect: {
				'ja-jp': "相手のバトルポケモンについている「ポケモンのどうぐ」をトラッシュする。",
			},
		},
		{
			name: { ja: "かみつく" },
			damage: 20,
			cost: ["Darkness", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561639,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [318],
};

export default card;
