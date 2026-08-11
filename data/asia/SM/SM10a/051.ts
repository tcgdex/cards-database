import { Card } from "../../../interfaces";
import Set from "../SM10a";

const card: Card = {
	set: Set,
	name: {
		ja: "あなぬけのヒモ",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		ja: "おたがいのプレイヤーは、それぞれ、自分のバトルポケモンをベンチポケモンと入れ替える。（入れ替えは相手からおこない、ベンチがいないプレイヤーは、入れ替えをしない。）",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 557330,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "A",
	rarity: "Rare Holo",
};

export default card;
