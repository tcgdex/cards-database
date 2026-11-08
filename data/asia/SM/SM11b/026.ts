import { Card } from "models/database/card";
import Set from "../SM11b";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "キルリア",
	},

	illustrator: "sowsow",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],

	description: {
		'ja-jp': "トレーナーの 明るい 気持ちが サイコパワーの 源。楽しい 気分に なると クルクル 踊る。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "さいみんじゅつ" },
			cost: ["Colorless"],
			effect: {
				'ja-jp': "相手のバトルポケモンをねむりにする。",
			},
		},
		{
			name: { ja: "かいてんげり" },
			damage: 20,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 555186,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ラルトス",
	},

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [281],
};

export default card;
