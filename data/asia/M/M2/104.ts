import { Card } from "models/database/card";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "パンクメット",
	},

	illustrator: "Studio Bora Inc.",
	category: "Trainer",

	effect: {
		'ja-jp': "このカードをつけているポケモンが、バトル場で相手のポケモンからワザのダメージを受けたとき、ワザを使ったポケモンにダメカンを4個のせる。",
	},

	variants: [{"type": "holo"}],

	trainerType: "Tool",
	regulationMark: "I",
	rarity: "Ultra Rare",

	thirdParty: {
		cardmarket: 850612,
		tcgplayer: 655897,
	},
};

export default card;