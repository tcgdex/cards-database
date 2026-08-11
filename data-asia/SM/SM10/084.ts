import { Card } from "../../../interfaces";
import Set from "../SM10";

const card: Card = {
	set: Set,
	name: {
		ja: "やみのいし",
	},

	illustrator: "Ryo Ueda",
	category: "Trainer",

	effect: {
		ja: "自分の場に「ムウマージ」「ドンカラス」「シャンデラ」「ギルガルド」（GXをふくむ）に進化できるポケモンがいるなら、その進化カードを、自分の山札から1枚選び、そのポケモンにのせて進化させる。そして山札を切る。（最初の自分の番や、出したばかりのポケモンにも使える。）",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557442,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "C",
	rarity: "Uncommon",
};

export default card;
