import { Card } from "../../../interfaces";
import Set from "../SM5S";

const card: Card = {
	set: Set,
	name: {
		ja: "ポケモンだいすきクラブ",
	},

	illustrator: "Sanosuke Sakuma",
	category: "Trainer",

	effect: {
		ja: "自分の山札からたねポケモンを2枚まで選び、相手に見せてから、手札に加える。そして山札を切る。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560015,
			},
		},
	],

	trainerType: "Supporter",
	rarity: "Uncommon",
};

export default card;
