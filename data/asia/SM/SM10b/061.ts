import { Card } from "../../../interfaces";
import Set from "../SM10b";

const card: Card = {
	set: Set,
	name: {
		ja: "かいじゅうマニア",
	},

	illustrator: "Hitoshi Ariga",
	category: "Trainer",

	effect: {
		ja: "自分の山札にあるにげるためのエネルギーが4個のポケモンを3枚まで、相手に見せてから、手札に加える。そして山札を切る。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 557263,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "C",
	rarity: "Ultra Rare",
};

export default card;
