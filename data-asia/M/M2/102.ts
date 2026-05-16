import { Card } from "../../../interfaces";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		ja: "ポケモンいれかえ",
	},

	illustrator: "Studio Bora Inc.",
	category: "Trainer",

	effect: {
		ja: "自分のバトルポケモンをベンチポケモンと入れ替える。",
	},

	variants: [{"type": "holo"}],

	trainerType: "Item",
	regulationMark: "I",
	rarity: "Ultra Rare",

	thirdParty: {
		cardmarket: 850609,
		tcgplayer: 656254,
	},
};

export default card;