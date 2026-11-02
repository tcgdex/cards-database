import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		ja: "カスミ",
	},

	illustrator: "Ken Sugimori",
	category: "Trainer",

	effect: {
		ja: "手札からカードを2枚選んでトラッシュしなければ、このカードは使えない。 「カスミのポケモン」が使うワザが対戦ポケモンにダメージを与える時、この番だけ、そのダメージは「+20」される。（控えポケモンへのダメージは、そのまま）",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 908316,
			},
		},
	],

	trainerType: "Supporter",
	rarity: "Classic Collection",
};

export default card;
