import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "アイリスの闘志",
	},

	illustrator: "yuu",
	category: "Trainer",

	effect: {
		ja: "このカードは、自分の手札を1枚トラッシュしなければ使えない。 自分の手札が6枚になるように、山札を引く。 サポートは、自分の番に1枚しか使えない。",
	},

	variants: [{"type": "normal"}],

	trainerType: "Supporter",
	regulationMark: "I",
	rarity: "Common",
};

export default card;
