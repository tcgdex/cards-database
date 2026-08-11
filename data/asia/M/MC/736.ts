import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "イグニッションエネルギー",
	},

	illustrator: "",
	category: "Energy",
	energyType: "Special",

	effect: {
		'ja-jp': "ポケモンについているこのカードは、自分の番の終わりにトラッシュする。このカードは、ポケモンについているかぎり、[C]エネルギー1個ぶんとしてはたらく。進化ポケモンについているなら、[C]エネルギー3個ぶんとしてはたらく。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 864038,
			},
		},
	],

	regulationMark: "I",
	rarity: "None",
};

export default card;
