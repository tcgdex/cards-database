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

	variants: [{"type": "normal"}],

	trainerType: "Tool",
	regulationMark: "I",
	rarity: "Uncommon",

	thirdParty: {
		cardmarket: 850583,
		tcgplayer: 655854,
	},
};

export default card;