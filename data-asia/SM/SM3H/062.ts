import { Card } from "../../../interfaces";
import Set from "../SM3H";

const card: Card = {
	set: Set,
	name: {
		ja: "あなぬけのヒモ",
	},

	illustrator: "",
	category: "Trainer",

	effect: {
		ja: "おたがいのプレイヤーは、それぞれ、自分のバトルポケモンをベンチポケモンと入れ替える。（入れ替えは相手からおこない、ベンチがいないプレイヤーは、入れ替えをしない。）",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 561126,
			},
		},
	],

	trainerType: "Item",
	rarity: "Secret Rare",
};

export default card;
