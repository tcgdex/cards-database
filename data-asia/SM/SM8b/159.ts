import { Card } from "../../../interfaces";
import Set from "../SM8b";

const card: Card = {
	set: Set,
	name: {
		ja: "ルスワール",
	},

	illustrator: "Kagemaru Himeno",
	category: "Trainer",

	effect: {
		ja: "このカードは、相手のバトル場に1進化ポケモンがいなければ使えない。自分の山札を4枚引く。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 551291,
			},
		},
	],

	trainerType: "Supporter",
	rarity: "Ultra Rare",
};

export default card;
