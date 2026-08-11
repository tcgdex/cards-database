import { Card } from "models/database/card";
import Set from "../M3";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "エネルギーリサイクル",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		'ja-jp': "自分のトラッシュから基本エネルギーを5枚まで選び、相手に見せて、山札にもどして切る。",
	},

	variants: [{"type": "holo"}],

	trainerType: "Item",
	regulationMark: "I",
	rarity: "Ultra Rare",

	thirdParty: {
		cardmarket: 868111,
		tcgplayer: 674420,
	},
};

export default card;