import { Card } from "models/database/card";
import Set from "../SM4S";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "カウンターキャッチャー",
	},

	illustrator: "",
	category: "Trainer",

	effect: {
		'ja-jp': "このカードは、自分のサイドの残り枚数が、相手のサイドの残り枚数より多いときにしか使えない。相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 560372,
			},
		},
	],

	trainerType: "Item",
	rarity: "Secret Rare",
};

export default card;
