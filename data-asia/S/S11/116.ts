import { Card } from "../../../interfaces";
import Set from "../S11";

const card: Card = {
	set: Set,
	name: {
		ja: "メリッサ",
	},

	illustrator: "Ryuta Fuse",
	category: "Trainer",

	effect: {
		ja: "このカードは、自分のロストゾーンにカードが10枚以上あるときにしか使えない。次の相手の番、自分のポケモン全員が、相手の「ポケモンV」から受けるワザのダメージは「-120」される。（新しく場に出したポケモンもふくむ。）",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 668234,
				tcgplayer: 570047,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "F",
	rarity: "Ultra Rare",
};

export default card;
