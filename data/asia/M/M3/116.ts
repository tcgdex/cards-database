import { Card } from "../../../interfaces";
import Set from "../M3";

const card: Card = {
	set: Set,
	name: {
		ja: "ユカリ",
	},

	illustrator: "Souichirou Gunjima",
	category: "Trainer",

	effect: {
		ja: "自分のポケモン1匹のHPを「150」回復する。 サポートは、自分の番に1枚しか使えない。",
	},

	variants: [{"type": "holo"}],

	trainerType: "Supporter",
	regulationMark: "I",
	rarity: "Special illustration rare",

	thirdParty: {
		cardmarket: 868126,
		tcgplayer: 674435,
	},
};

export default card;