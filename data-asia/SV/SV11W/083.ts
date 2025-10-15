import { Card } from "../../../interfaces";
import Set from "../SV11W";

const card: Card = {
	set: Set,
	name: {
		ja: "クラウン",
	},

	illustrator: "Teeziro",
	category: "Trainer",

	effect: {
		ja: "おたがいのプレイヤーは、それぞれ手札をすべて山札にもどして切る。その後、自分はコインを1回投げ、オモテなら自分は5枚、相手は3枚、山札を引く。ウラなら自分は3枚、相手は5枚、山札を引く。 サポートは、自分の番に1枚しか使えない。",
	},

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false,
	},

	trainerType: "Supporter",
	regulationMark: "I",
	rarity: "Uncommon",
};

export default card;
