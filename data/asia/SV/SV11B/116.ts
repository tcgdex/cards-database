import { Card } from "models/database/card";
import Set from "../SV11B";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "エモンガ",
	},

	illustrator: "Tomomi Ozaki",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],

	description: {
		'ja-jp': "ほほの 電気袋で 作った 電気を 膜の 内側に ためて 滑空しながら 電気を 放つ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "なかまをよぶ" },
			cost: ["Colorless"],
			effect: {
				'ja-jp': "自分の山札からたねポケモンを2枚まで選び、ベンチに出す。そして山札を切る。",
			},
		},
		{ name: { ja: "バチバチ" }, damage: 20, cost: ["Lightning"] },
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [{ type: "holo" }],

	retreat: 0,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [587],

	thirdParty: {
		cardmarket: 829359,
		tcgplayer: 636470,
	},
};

export default card;
