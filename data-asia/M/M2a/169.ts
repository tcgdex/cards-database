import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "アセロラのいたずら",
	},

	illustrator: "Yuu Nishida",
	category: "Trainer",

	effect: {
		ja: "このカードは、相手のサイドの残り枚数が2枚以下のときにしか使えない。 自分の場のポケモンを1匹選ぶ。次の相手の番、そのポケモンは相手の「ポケモンex」からワザのダメージや効果を受けない。 サポートは、自分の番に1枚しか使えない。",
	},

	variants: [{"type": "normal"}],

	trainerType: "Supporter",
	regulationMark: "I",
	rarity: "Common",
};

export default card;
