import { Card } from "models/database/card";
import Set from "../SM9";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "あなぬけのヒモ",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		'ja-jp': "おたがいのプレイヤーは、それぞれ、自分のバトルポケモンをベンチポケモンと入れ替える。（入れ替えは相手からおこない、ベンチがいないプレイヤーは、入れ替えをしない。）",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558438,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "A",
	rarity: "Uncommon",
};

export default card;
