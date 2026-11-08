import { Card } from "models/database/card";
import Set from "../SM10b";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ムサシとコジロウ",
	},

	illustrator: "Megumi Mizutani",
	category: "Trainer",

	effect: {
		'ja-jp': "おたがいのプレイヤーは、それぞれ自分の手札を、2枚トラッシュする。（トラッシュは相手から行う。手札がないプレイヤーはトラッシュしない。）",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 557264,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "C",
	rarity: "Ultra Rare",
};

export default card;
