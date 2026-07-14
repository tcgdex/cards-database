import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "ツールスクラッパー",
	},

	illustrator: "Studio Bora Inc.",
	category: "Trainer",

	effect: {
		ja: "おたがいの場のポケモンについている「ポケモンのどうぐ」を2枚まで選び、トラッシュする。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 877354,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "I",
	rarity: "Ultra Rare",
};

export default card;
