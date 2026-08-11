import { Card } from "../../../interfaces";
import Set from "../SM12";

const card: Card = {
	set: Set,
	name: {
		ja: "レッド&グリーン",
	},

	illustrator: "Megumi Mizutani",
	category: "Trainer",

	effect: {
		ja: "自分の場のポケモン1匹から進化する「ポケモンGX」を、自分の山札から1枚選び、そのポケモンにのせて進化させる。そして山札を切る。（最初の自分の番や、出したばかりのポケモンには使えない。）追加で、このカードを使うときに、自分の手札を2枚トラッシュしてよい。その場合、進化させたポケモンに、自分の山札にある基本エネルギーを2枚までつける。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 555016,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "C",
	rarity: "Uncommon",
};

export default card;
