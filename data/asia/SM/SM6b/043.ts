import { Card } from "models/database/card";
import Set from "../SM6b";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "タツベイ",
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 60,
	types: ["Dragon"],

	description: {
		'ja-jp': "鋼鉄並みの 石頭で やたら めったら 頭突きする。 空を 飛べない ストレスの せいだ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ける" },
			damage: 10,
			cost: ["Colorless"],
			effect: {
				'ja-jp': "コインを1回投げウラなら、このワザは失敗。",
			},
		},
		{
			name: { ja: "りゅうのめ" },
			damage: 20,
			cost: ["Fire", "Water"],
			effect: {
				'ja-jp': "相手のバトルポケモンをねむりにする。",
			},
		},
	],

	weaknesses: [{ type: "Fairy", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559193,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [371],
};

export default card;
