import { Card } from "../../../interfaces";
import Set from "../SM12";

const card: Card = {
	set: Set,
	name: {
		ja: "プレシャスボール",
	},

	illustrator: "Ryo Ueda",
	category: "Trainer",

	effect: {
		ja: "自分の山札にある「ポケモンGX」を1枚、相手に見せてから、手札に加える。そして山札を切る。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 555023,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "C",
	rarity: "Rare Holo",
};

export default card;
