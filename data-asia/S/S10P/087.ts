import { Card } from "../../../interfaces";
import Set from "../S10P";

const card: Card = {
	set: Set,
	name: {
		ja: "シンオウ神殿",
	},

	illustrator: "Oswaldo KATO",
	category: "Trainer",

	effect: {
		ja: "おたがいの場のポケモンについている特殊エネルギーの効果はすべてなくなり、[C]エネルギー1個ぶんとしてはたらく。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 651350,
				tcgplayer: 569930,
			},
		},
	],

	trainerType: "Stadium",
	regulationMark: "F",
	rarity: "Mega Hyper Rare",
};

export default card;
