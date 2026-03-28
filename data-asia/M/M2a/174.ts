import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒビキの冒険",
	},

	illustrator: "Iori Suzuki",
	category: "Trainer",

	effect: {
		ja: "自分の山札から「ヒビキのポケモン」と「基本エネルギー」を合計3枚まで選び、相手に見せて、手札に加える。そして山札を切る。 サポートは、自分の番に1枚しか使えない。",
	},

	variants: [{"type": "normal"}],

	trainerType: "Supporter",
	regulationMark: "I",
	rarity: "Common",
};

export default card;
