import { Card } from "../../../interfaces";
import Set from "../SM7";

const card: Card = {
	set: Set,
	name: {
		ja: "ダイゴの決断",
	},

	illustrator: "Hitoshi Ariga",
	category: "Trainer",

	effect: {
		ja: "このカードを使ったら、自分の番は終わる。自分の山札にある好きなカードを3枚まで、手札に加える。そして山札を切る。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 559049,
			},
		},
	],

	trainerType: "Supporter",
	rarity: "Rare",
};

export default card;
