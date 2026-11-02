import { Card } from "../../../interfaces";
import Set from "../S6K";

const card: Card = {
	set: Set,
	name: {
		ja: "正義のグローブ",
		'zh-tw': "正義手套",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		ja: "このカードをつけているポケモンが使うワザの、相手のバトル場の[悪]ポケモンへのダメージは「+30」される。",
		'zh-tw': "附有這張卡的寶可夢使用的招式，對對手的戰鬥場的【惡】寶可夢造成的傷害「+30」點。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560850,
				tcgplayer: 569290,
			},
		},
	],

	trainerType: "Tool",
	regulationMark: "E",
	rarity: "Uncommon",
};

export default card;
