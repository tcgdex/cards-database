import { Card } from "../../../interfaces";
import Set from "../S10a";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒナツ",
	},

	illustrator: "You Iribi",
	category: "Trainer",

	effect: {
		ja: "自分の山札から進化ポケモン（「ルールを持つポケモン」をのぞく）を3枚まで選び、相手に見せて、手札に加える。そして山札を切る。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 657065,
				tcgplayer: 570749,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "F",
	rarity: "Ultra Rare",
};

export default card;
