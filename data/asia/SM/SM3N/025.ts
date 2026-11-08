import { Card } from "models/database/card";
import Set from "../SM3N";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ニャオニクス",
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		'ja-jp': "危険が 迫ると 耳を 持ち上げ １０トン トラックを ひねりつぶす サイコパワーを 解放する。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ひきつける" },
			cost: ["Psychic"],
			effect: {
				'ja-jp': "自分の山札を3枚引く。",
			},
		},
		{
			name: { ja: "ハンドキネシス" },
			damage: "10×",
			cost: ["Colorless", "Colorless"],
			effect: {
				'ja-jp': "自分の手札の枚数x10ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561025,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ニャスパー",
	},

	retreat: 1,
	rarity: "Uncommon",
	dexId: [678],
};

export default card;
