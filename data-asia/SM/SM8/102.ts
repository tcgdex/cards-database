import { Card } from "../../../interfaces";
import Set from "../SM8";

const card: Card = {
	set: Set,
	name: {
		ja: "ウツギ博士のレクチャー",
	},

	illustrator: "Hideki Ishikawa",
	category: "Trainer",

	effect: {
		ja: "自分の山札にある、HPが「60」以下のポケモンを3枚まで、相手に見せてから、手札に加える。そして山札を切る。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 558741,
			},
		},
	],

	trainerType: "Supporter",
	rarity: "Ultra Rare",
};

export default card;
