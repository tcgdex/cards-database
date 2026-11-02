import { Card } from "../../../interfaces";
import Set from "../SM6b";

const card: Card = {
	set: Set,
	name: {
		ja: "フレンドボール",
	},

	illustrator: "Katsura Tabata",
	category: "Trainer",

	effect: {
		ja: "自分の山札にある、相手の場のポケモンと同じタイプのポケモンを1枚、相手に見せてから、手札に加える。そして山札を切る。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559207,
			},
		},
	],

	trainerType: "Item",
	rarity: "Common",
};

export default card;
