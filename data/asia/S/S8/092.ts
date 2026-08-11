import { Card } from "../../../interfaces";
import Set from "../S8";

const card: Card = {
	set: Set,
	name: {
		ja: "パワータブレット",
		'zh-tw': "強力糖錠",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		ja: "この番、自分の「フュージョン」のポケモンが使うワザの、相手のバトルポケモンへのダメージは「+30」される。",
		'zh-tw': "在這個回合，自己的「匯流」寶可夢使用的招式，對對手的戰鬥寶可夢造成的傷害「+30」點。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 575647,
				tcgplayer: 569593,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "E",
	rarity: "Uncommon",
};

export default card;
