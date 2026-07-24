import { Card } from "../../../interfaces";
import Set from "../SM5S";

const card: Card = {
	set: Set,
	name: {
		ja: "ミッシングクローバー",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		ja: "「ミッシングクローバー」は、1枚または4枚同時に使え、使った枚数によって効果が変わる。◆1枚使ったなら、自分の山札を上から1枚見て、もとにもどす。◆4枚同時に使ったなら、自分のサイドを1枚とる。（この効果は、4枚で1回はたらく。）",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560012,
			},
		},
	],

	trainerType: "Item",
	rarity: "Common",
};

export default card;
