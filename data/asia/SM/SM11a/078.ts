import { Card } from "models/database/card";
import Set from "../SM11a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "グレートキャッチャー",
	},

	illustrator: "",
	category: "Trainer",

	effect: {
		'ja-jp': "このカードは、自分の手札を2枚トラッシュしなければ使えない。相手のベンチの「ポケモンGX・EX」を1匹選び、バトルポケモンと入れ替える。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 556792,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "C",
	rarity: "Secret Rare",
};

export default card;
