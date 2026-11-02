import { Card } from "../../../interfaces";
import Set from "../SM8a";

const card: Card = {
	set: Set,
	name: {
		ja: "ミカン",
	},

	illustrator: "Hideki Ishikawa",
	category: "Trainer",

	effect: {
		ja: "自分の山札にある[鋼]ポケモンを1枚、相手に見せてから、手札に加える。そして山札を切る。後攻プレイヤーの最初の番に使ったなら、手札に加えられる[鋼]ポケモンの枚数は5枚までになる。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 558632,
			},
		},
	],

	trainerType: "Supporter",
	rarity: "Ultra Rare",
};

export default card;
