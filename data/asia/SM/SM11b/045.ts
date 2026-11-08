import { Card } from "models/database/card";
import Set from "../SM11b";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "Nの覚悟",
	},

	illustrator: "Ryuta Fuse",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の山札を上から6枚トラッシュし、その中にある基本エネルギーをすべて、自分のベンチの[竜]ポケモン1匹につける。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 555236,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "C",
	rarity: "Uncommon",
};

export default card;
