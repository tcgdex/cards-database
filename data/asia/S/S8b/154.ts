import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "ダンデ",
		'zh-tw': "丹帝",
	},

	illustrator: "Ken Sugimori",
	category: "Trainer",

	effect: {
		ja: "この番、自分のポケモンが使うワザの、相手のバトルポケモンへのダメージは「+30」される。",
		'zh-tw': "在這個回合，自己的寶可夢使用的招式，對對手的戰鬥寶可夢造成的傷害「+30」點。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 586670,
				tcgplayer: 571407,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "D",
	rarity: "None",
};

export default card;
