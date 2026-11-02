import { Card } from "../../../interfaces";
import Set from "../S11";

const card: Card = {
	set: Set,
	name: {
		ja: "ロストスイーパー",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		ja: "このカードは、自分の手札を1枚、ロストゾーンに置かなければ使えない。おたがいの場のポケモンについている「ポケモンのどうぐ」と場に出ている「スタジアム」の中から1枚選び、ロストゾーンに置く。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 668244,
				tcgplayer: 570057,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "F",
	rarity: "Mega Hyper Rare",
};

export default card;
