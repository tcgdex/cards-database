import { Card } from "../../../interfaces";
import Set from "../SV10";

const card: Card = {
	set: Set,
	name: {
		ja: "ロケット団のランス",
	},

	illustrator: "Naoki Saito",
	category: "Trainer",

	effect: {
		ja: "このカードは、先攻プレイヤーの最初の番でも使える。自分の山札からたねポケモンの「ロケット団のポケモン」を3枚まで選び、相手に見せて、手札に加える。そして山札を切る。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 821955,
				tcgplayer: 629064,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "I",
	rarity: "Ultra Rare",
};

export default card;
