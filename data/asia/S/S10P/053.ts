import { Card } from "models/database/card";
import Set from "../S10P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ベロベルト",
		'zh-tw': "大舌舔",
	},

	illustrator: "Shibuzoh.",
	category: "Pokemon",
	hp: 140,
	types: ["Colorless"],

	description: {
		'ja-jp': "体の 何倍もの 長さまで 伸びる 不思議な ベロを もつ。 その 不思議は 未解明のまま。",
		'zh-tw': "神奇的舌頭能夠伸到身高的好幾倍遠。至今沒人能解開 為什麼它會這麼神奇。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				'ja-jp': "ベロではたく",
				'zh-tw': "舌擊",
			},
			damage: 50,
			cost: ["Colorless", "Colorless"],
		},
		{
			name: {
				'ja-jp': "ヘビーインパクト",
				'zh-tw': "重磅衝擊",
			},
			damage: 130,
			cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 651112,
				tcgplayer: 569896,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ベロリンガ",
	},

	retreat: 4,
	regulationMark: "F",
	rarity: "Uncommon",
	dexId: [463],
};

export default card;
