import { Card } from "../../../interfaces";
import Set from "../M6";

const card: Card = {
	set: Set,
	name: {
		ja: "ブーバー",
	},

	illustrator: "GOSSAN",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],

	description: {
		ja: "体の 表面には 太陽と 同じような 炎の ゆらめきが 発生している。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ちからをあつめる" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札から基本エネルギーを2枚まで選び、相手に見せて、手札に加える。そして山札を切る。",
			},
		},
		{
			name: { ja: "かえん" },
			damage: 30,
			cost: ["Fire", "Colorless"],
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 899857,
				tcgplayer: 709168,
			},
		},
	],

	retreat: 2,
	regulationMark: "J",
	rarity: "Common",
	dexId: [126],
};

export default card;
