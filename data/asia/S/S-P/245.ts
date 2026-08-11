import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "あなぬけのヒモ",
	},

	illustrator: "sadaji",
	category: "Trainer",

	effect: {
		ja: "おたがいのプレイヤーは、それぞれ、自分のバトルポケモンをベンチポケモンと入れ替える。（入れ替えは相手からおこない、ベンチがいないプレイヤーは、入れ替えをしない。）",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 597426,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "E",
	rarity: "Promo",
};

export default card;
