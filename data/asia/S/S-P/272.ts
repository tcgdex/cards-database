import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ピカチュウ",
	},

	illustrator: "Ryota Murayama",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	description: {
		ja: "つくる 電気が 強力な ピカチュウほど ほっぺの 袋は 軟らかく よく 伸びるぞ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "おとどけギフト" },
			cost: ["Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、自分の山札からグッズを1枚選び、相手に見せて、手札に加える。そして山札を切る。",
			},
		},
		{
			name: { ja: "ピカボール" },
			damage: 50,
			cost: ["Lightning", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 653675,
				tcgplayer: 597445,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Promo",
	dexId: [25],
};

export default card;
