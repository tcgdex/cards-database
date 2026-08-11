import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "シブヤのピカチュウ",
	},

	illustrator: "",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	description: {
		ja: "つくる 電気が 強力な ピカチュウほど ほっぺの 袋は 軟らかく よく 伸びるぞ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ニューオープン" },
			cost: ["Colorless"],
			effect: {
				ja: "おたがいのプレイヤーは、それぞれ自分の山札を上から1枚オモテにして、相手に見せて、手札に加える。",
			},
		},
		{
			name: { ja: "かみなり" },
			damage: 80,
			cost: ["Lightning", "Lightning", "Colorless"],
			effect: {
				ja: "コインを1回投げウラなら、このポケモンにも20ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 462909,
				tcgplayer: 597229,
			},
		},
	],

	retreat: 1,
	regulationMark: "D",
	rarity: "Promo",
	dexId: [25],
};

export default card;
