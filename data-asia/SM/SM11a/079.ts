import { Card } from "../../../interfaces";
import Set from "../SM11a";

const card: Card = {
	set: Set,
	name: {
		ja: "格闘道場",
	},

	illustrator: "",
	category: "Trainer",

	effect: {
		ja: "おたがいの基本[闘]エネルギーがついているポケモン（「ウルトラビースト」をのぞく）が使うワザの、相手のバトルポケモンへのダメージは「+10」され、自分のサイドの残り枚数が、相手より多いなら「+40」になる。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 556795,
			},
		},
	],

	trainerType: "Stadium",
	regulationMark: "C",
	rarity: "Secret Rare",
};

export default card;
