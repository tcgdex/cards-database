import { Card } from "../../../interfaces";
import Set from "../S11a";

const card: Card = {
	set: Set,
	name: {
		ja: "セレナ",
	},

	illustrator: "Megumi Mizutani",
	category: "Trainer",

	effect: {
		ja: "このカードは、2つの効果から1つを選んで使う。◆自分の手札を3枚まで選び、トラッシュする。（必ず1枚は選ぶ。）その後、自分の手札が5枚になるように、山札を引く。◆相手のベンチの「ポケモンV」を1匹選び、バトルポケモンと入れ替える。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 673398,
				tcgplayer: 570844,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "F",
	rarity: "Ultra Rare",
};

export default card;
