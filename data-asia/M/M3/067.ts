import { Card } from "../../../interfaces";
import Set from "../M3";

const card: Card = {
	set: Set,
	name: {
		ja: "エネはたき",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		ja: "相手の手札を見て、その中からエネルギーを1枚選び、相手の山札の下にもどす。",
	},

	variants: [{"type": "normal"}],

	trainerType: "Item",
	regulationMark: "I",
	rarity: "Uncommon",

	thirdParty: {
		cardmarket: 868052,
		tcgplayer: 674386,
	},
};

export default card;