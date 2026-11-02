import { Card } from "../../../interfaces";
import Set from "../S10a";

const card: Card = {
	set: Set,
	name: {
		ja: "エイチ湖",
		'zh-tw': "睿智湖",
	},

	illustrator: "Oswaldo KATO",
	category: "Trainer",

	effect: {
		ja: "おたがいの[W]または[F]エネルギーがついているポケモンが、相手のポケモンから受けるワザのダメージは「-20」される。",
		'zh-tw': "雙方的身上附有【水】或者【鬥】能量的寶可夢，受到對手的寶可夢招式的傷害「-20」點。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 656395,
				tcgplayer: 570734,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577138,
			},
		},
	],

	trainerType: "Stadium",
	regulationMark: "F",
	rarity: "Uncommon",
};

export default card;
