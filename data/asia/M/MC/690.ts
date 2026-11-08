import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ホップのこだわりハチマキ",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		'ja-jp': "このカードをつけている「ホップのポケモン」は、ワザを使うためのエネルギーが[C]エネルギー1個ぶん少なくなり、そのポケモンが使うワザの、相手のバトルポケモンへのダメージは「+30」される。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863992,
			},
		},
	],

	trainerType: "Tool",
	regulationMark: "I",
	rarity: "None",
};

export default card;
