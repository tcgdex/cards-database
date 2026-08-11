import { Card } from "../../../interfaces";
import Set from "../SM7a";

const card: Card = {
	set: Set,
	name: {
		ja: "カウンターゲイン",
	},

	illustrator: "",
	category: "Trainer",

	effect: {
		ja: "自分のサイドの残り枚数が、相手より多いなら、このカードをつけているポケモンが使うワザに必要なエネルギーは、エネルギー1個ぶん少なくなる。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 558961,
			},
		},
	],

	trainerType: "Tool",
	rarity: "Secret Rare",
};

export default card;
