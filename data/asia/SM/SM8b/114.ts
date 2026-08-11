import { Card } from "models/database/card";
import Set from "../SM8b";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "カウンターキャッチャー",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		'ja-jp': "このカードは、自分のサイドの残り枚数が、相手のサイドの残り枚数より多いときにしか使えない。相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 551066,
			},
		},
	],

	trainerType: "Item",
	rarity: "None",
};

export default card;
