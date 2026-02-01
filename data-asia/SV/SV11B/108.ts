import { Card } from "../../../interfaces";
import Set from "../SV11B";

const card: Card = {
	set: Set,
	name: {
		ja: "ガマガル",
	},

	illustrator: "KEIICHIRO ITO",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	description: {
		ja: "頭の コブを 振動させると 水中が 波立つ だけでなく 地面も 地震のように 揺れる。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "りんしょう" },
			damage: "40x",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "自分の場の、ワザ「りんしょう」を持つポケモンの数×40ダメージ。",
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

	variants: [{ type: "holo" }],

	evolveFrom: {
		ja: "オタマロ",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [536],

	thirdParty: {
		cardmarket: 829351,
		tcgplayer: 636462,
	},
};

export default card;
