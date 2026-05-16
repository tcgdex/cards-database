import { Card } from "../../../interfaces";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		ja: "せいなるおまもり",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		ja: "このカードをつけているポケモンが、相手の特性を持つポケモンから受けるワザのダメージは「-30」される。",
	},

	variants: [{"type": "holo"}],

	trainerType: "Tool",
	regulationMark: "I",
	rarity: "Ultra Rare",

	thirdParty: {
		cardmarket: 850611,
		tcgplayer: 655881,
	},
};

export default card;