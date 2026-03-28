import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "カナリィ",
	},

	illustrator: "Naoki Saito",
	category: "Trainer",

	effect: {
		ja: "このカードは、自分の手札を1枚トラッシュしなければ使えない。 自分の山札からポケモンを4枚まで選び、相手に見せて、手札に加える。そして山札を切る。 サポートは、自分の番に1枚しか使えない。",
	},

	variants: [{"type": "normal"}],

	trainerType: "Supporter",
	regulationMark: "I",
	rarity: "Common",
};

export default card;
