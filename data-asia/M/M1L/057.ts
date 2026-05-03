import { Card } from "../../../interfaces";
import Set from "../M1L";

const card: Card = {
	set: Set,
	name: {
		ja: "アイアンディフェンダー",
	},

	illustrator: "Studio Bora Inc.",
	category: "Trainer",

	effect: {
		ja: "次の相手の番、自分のポケモン全員が、相手のポケモンから受けるワザのダメージは「-30」される。（新しく場に出したポケモンもふくむ。）",
	},

	variants: [{"type": "normal"}],

	trainerType: "Item",
	regulationMark: "I",
	rarity: "Uncommon",

	thirdParty: {
		cardmarket: 840352,
		tcgplayer: 647166,
	},
};

export default card;