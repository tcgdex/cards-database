import { Card } from "../../../interfaces";
import Set from "../SV6a";

const card: Card = {
	set: Set,
	name: {
		ja: "くさりもち",
		'zh-tw': "鎖鏈糬",
	},

	illustrator: "5ban Graphics",
	category: "Trainer",

	effect: {
		ja: "このカードをつけているどくのポケモンが使うワザの、相手のバトルポケモンへのダメージは「+40」される。",
		'zh-tw': "附有這張卡的【中毒】的寶可夢使用的招式，對對手的戰鬥寶可夢造成的傷害「+40」點。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 773806,
				tcgplayer: 566308,
			},
		},
	],

	trainerType: "Tool",
	regulationMark: "H",
	rarity: "Uncommon",
};

export default card;
