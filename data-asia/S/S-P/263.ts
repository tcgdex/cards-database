import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ゲン",
	},

	illustrator: "Ken Sugimori",
	category: "Trainer",

	effect: {
		ja: "自分の山札を上から5枚オモテにして、相手にその中からカードを2枚選んでもらう。自分は選ばれたカードをトラッシュし、残りのカードは手札に加える。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 597436,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "F",
	rarity: "Promo",
};

export default card;
