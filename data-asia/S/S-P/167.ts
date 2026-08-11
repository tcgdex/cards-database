import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "プレシャスボール",
		'zh-tw': "洗翠 野蠻鱸魚",
	},

	illustrator: "5ban Graphics",
	category: "Trainer",

	effect: {
		ja: "自分の山札にある「ポケモンGX」を1枚、相手に見せてから、手札に加える。そして山札を切る。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 525460,
				tcgplayer: 597365,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "C",
	rarity: "Promo",
};

export default card;
