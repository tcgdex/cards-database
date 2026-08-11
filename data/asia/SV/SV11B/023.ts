import { Card } from "models/database/card";
import Set from "../SV11B";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ガマガル",
	},

	illustrator: "Yukihiro Tada",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	description: {
		'ja-jp': "頭の コブを 振動させると 水中が 波立つ だけでなく 地面も 地震のように 揺れる。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "りんしょう" },
			damage: "40x",
			cost: ["Colorless", "Colorless"],
			effect: {
				'ja-jp': "自分の場の、ワザ「りんしょう」を持つポケモンの数×40ダメージ。",
			},
		},
		{
			name: { ja: "スプラッシュ" },
			damage: 60,
			cost: ["Water", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{ type: "normal" },
		{ type: "reverse", foil: "pokeball" },
		{ type: "reverse", foil: "masterball" },
	],

	evolveFrom: {
		'ja-jp': "オタマロ",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "Common",
	dexId: [536],

	thirdParty: {
		cardmarket: 828471,
		tcgplayer: 636377,
	},
};

export default card;
