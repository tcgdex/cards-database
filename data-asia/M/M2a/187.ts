import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "ミステリーガーデン",
	},

	illustrator: "AYUMI ODASHIMA",
	category: "Trainer",

	effect: {
		ja: "おたがいのプレイヤーは、自分の番ごとに1回、手札からエネルギーを1枚トラッシュするなら、自分の手札の枚数が、自分の場の[P]ポケモンの数と同じ枚数になるように、山札を引いてよい。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 861430,
			},
		},
	],

	trainerType: "Stadium",
	regulationMark: "I",
	rarity: "None",
};

export default card;
