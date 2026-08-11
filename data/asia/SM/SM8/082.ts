import { Card } from "../../../interfaces";
import Set from "../SM8";

const card: Card = {
	set: Set,
	name: {
		ja: "モーモーミルク",
	},

	illustrator: "Ayaka Yoshida",
	category: "Trainer",

	effect: {
		ja: "自分のポケモンを1匹選ぶ。コインを2回投げ、オモテの数x30ダメージぶん、そのポケモンのHPを回復する。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558721,
			},
		},
	],

	trainerType: "Item",
	rarity: "Uncommon",
};

export default card;
