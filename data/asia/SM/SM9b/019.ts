import { Card } from "models/database/card";
import Set from "../SM9b";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "スリープ",
	},

	illustrator: "Miki Tanaka",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		'ja-jp': "レジャー施設の 近くで 姿を 見かける。 その晩 子どもが 見る 楽しいユメを 狙って いるのだ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "さいみんじゅつ" },
			cost: ["Psychic"],
			effect: {
				'ja-jp': "相手のバトルポケモンをねむりにする。",
			},
		},
		{
			name: { ja: "サイコパンチ" },
			damage: 30,
			cost: ["Psychic", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558137,
			},
		},
	],

	retreat: 2,
	regulationMark: "C",
	rarity: "Common",
	dexId: [96],
};

export default card;
