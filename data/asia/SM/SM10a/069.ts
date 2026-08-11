import { Card } from "models/database/card";
import Set from "../SM10a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "くろおび",
	},

	illustrator: "",
	category: "Trainer",

	effect: {
		'ja-jp': "自分のサイドの残り枚数が、相手より多いなら、このカードをつけているポケモンが使うワザに必要なエネルギーは、エネルギー1個ぶん少なくなる。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 557348,
			},
		},
	],

	trainerType: "Tool",
	regulationMark: "C",
	rarity: "Secret Rare",
};

export default card;
