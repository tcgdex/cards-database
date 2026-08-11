import { Card } from "../../../interfaces";
import Set from "../SM8";

const card: Card = {
	set: Set,
	name: {
		ja: "ルザミーネ",
	},

	illustrator: "nagimiso",
	category: "Trainer",

	effect: {
		ja: "このカードは、相手のサイドの残り枚数が3枚でなければ使えない。次の相手の番、自分の「ウルトラビースト」全員は、相手のポケモンからワザのダメージを受けない。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 558731,
			},
		},
	],

	trainerType: "Supporter",
	rarity: "Rare Holo",
};

export default card;
