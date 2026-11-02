import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "アセロラのいたずら",
	},

	illustrator: "Yuu Nishida",
	category: "Trainer",

	effect: {
		ja: "このカードは、相手のサイドの残り枚数が2枚以下のときにしか使えない。 自分の場のポケモンを1匹選ぶ。次の相手の番、そのポケモンは相手の「ポケモンex」からワザのダメージや効果を受けない。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863999,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "I",
	rarity: "None",
};

export default card;
