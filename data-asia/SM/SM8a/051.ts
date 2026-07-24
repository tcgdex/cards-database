import { Card } from "../../../interfaces";
import Set from "../SM8a";

const card: Card = {
	set: Set,
	name: {
		ja: "ミカン",
	},

	illustrator: "Ken Sugimori",
	category: "Trainer",

	effect: {
		ja: "自分の山札にある[鋼]ポケモンを1枚、相手に見せてから、手札に加える。そして山札を切る。後攻プレイヤーの最初の番に使ったなら、手札に加えられる[鋼]ポケモンの枚数は5枚までになる。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558625,
			},
		},
	],

	trainerType: "Supporter",
	rarity: "Uncommon",
};

export default card;
