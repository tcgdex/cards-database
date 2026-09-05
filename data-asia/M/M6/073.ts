import { Card } from "../../../interfaces";
import Set from "../M6";

const card: Card = {
	set: Set,
	name: {
		ja: "伝説の山頂",
	},

	illustrator: "nagimiso",
	category: "Trainer",

	effect: {
		ja: "おたがいの[C]ポケモンが、相手のポケモンからワザのダメージを受けてきぜつしたとき、とられるサイドは1枚少なくなる。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 900084,
				tcgplayer: 709226,
			},
		},
	],

	trainerType: "Stadium",
	regulationMark: "J",
	rarity: "Uncommon",
};

export default card;
