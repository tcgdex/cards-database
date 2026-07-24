import { Card } from "../../../interfaces";
import Set from "../SM11";

const card: Card = {
	set: Set,
	name: {
		ja: "ミステリートレジャー",
	},

	illustrator: "Eske Yoshinob",
	category: "Trainer",

	effect: {
		ja: "このカードは、自分の手札を1枚トラッシュしなければ使えない。自分の山札にある[超]または[竜]ポケモンを1枚、相手に見せてから、手札に加える。そして山札を切る。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 557055,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "B",
	rarity: "Rare Holo",
};

export default card;
