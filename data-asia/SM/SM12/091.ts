import { Card } from "../../../interfaces";
import Set from "../SM12";

const card: Card = {
	set: Set,
	name: {
		ja: "混沌のうねり",
	},

	illustrator: "Ryo Ueda",
	category: "Trainer",

	effect: {
		ja: "おたがいのプレイヤーが、手札から別の名前のスタジアムを場に出したとき、このスタジアムをトラッシュしたあと、そのスタジアムもトラッシュする。（新しく出たスタジアムの効果ははたらかない。）",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 555018,
			},
		},
	],

	trainerType: "Stadium",
	regulationMark: "C",
	rarity: "Uncommon",
};

export default card;
