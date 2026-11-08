import { Card } from "models/database/card";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ヒノアラシ",
	},

	illustrator: "Teeziro",
	category: "Pokemon",
	hp: 60,
	types: ["Fire"],

	description: {
		'ja-jp': "臆病な 性格。 驚くと 背中の 炎が 一段と 強く 燃え上がる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "エネチャージ" },
			cost: ["Colorless"],
			effect: {
				'ja-jp': "自分の山札から基本エネルギーを2枚まで選び、相手に見せて、手札に加える。そして山札を切る。",
			},
		},
		{
			name: { ja: "ひだね" },
			damage: 10,
			cost: ["Colorless"],
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 606613,
				tcgplayer: 597448,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Promo",
	dexId: [155],
};

export default card;
