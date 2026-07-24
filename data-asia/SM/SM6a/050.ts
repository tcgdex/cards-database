import { Card } from "../../../interfaces";
import Set from "../SM6a";

const card: Card = {
	set: Set,
	name: {
		ja: "ワタル♢",
	},

	illustrator: "kodama",
	category: "Trainer",

	effect: {
		ja: "このカードは、前の相手の番に、自分のポケモンがきぜつしていなければ使えない。自分の山札にある[竜]ポケモンを2枚まで、ベンチに出す。そして山札を切る。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 559367,
			},
		},
	],

	trainerType: "Supporter",
	rarity: "Rare Holo",
};

export default card;
