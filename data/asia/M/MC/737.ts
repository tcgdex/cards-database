import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "スパイクエネルギー",
	},

	illustrator: "",
	category: "Energy",
	energyType: "Special",

	effect: {
		'ja-jp': "このカードは、ポケモンについているかぎり、[C]エネルギー1個ぶんとしてはたらく。このカードをつけているポケモンが、バトル場で相手のポケモンからワザのダメージを受けたとき、ワザを使ったポケモンにダメカンを2個のせる。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 864039,
			},
		},
	],

	regulationMark: "I",
	rarity: "None",
};

export default card;
