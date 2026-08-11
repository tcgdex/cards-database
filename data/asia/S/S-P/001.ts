import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ピカチュウ",
	},

	illustrator: "Hideki Ishikawa",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],

	description: {
		ja: "つくる 電気が 強力な ピカチュウほど ほっぺの 袋は 軟らかく よく 伸びるぞ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "アイアンテール" },
			damage: "30×",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "ウラが出るまでコインを投げ、オモテの数×30ダメージ。",
			},
		},
		{
			name: { ja: "エレキボール" },
			damage: 60,
			cost: ["Lightning", "Lightning", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 462904,
				tcgplayer: 597228,
			},
		},
	],

	retreat: 1,
	regulationMark: "D",
	rarity: "Promo",
	dexId: [25],
};

export default card;
