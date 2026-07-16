import { Card } from "../../../interfaces";
import Set from "../SM11b";

const card: Card = {
	set: Set,
	name: {
		ja: "Nの覚悟",
	},

	illustrator: "Ryuta Fuse",
	category: "Trainer",

	effect: {
		ja: "自分の山札を上から6枚トラッシュし、その中にある基本エネルギーをすべて、自分のベンチの[竜]ポケモン1匹につける。",
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
