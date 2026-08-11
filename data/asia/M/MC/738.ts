import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ブーメランエネルギー",
	},

	illustrator: "",
	category: "Energy",
	energyType: "Special",

	effect: {
		'ja-jp': "このカードは、ポケモンについているかぎり、[C]エネルギー1個ぶんとしてはたらく。このカードをつけているポケモンが使うワザの効果で、このカードがトラッシュされたなら、ワザのダメージや効果のあとに、もとのポケモンにつけなおす。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 864040,
			},
		},
	],

	regulationMark: "H",
	rarity: "None",
};

export default card;
