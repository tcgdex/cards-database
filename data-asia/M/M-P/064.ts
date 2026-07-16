import { Card } from "../../../interfaces";
import Set from "../M-P";

const card: Card = {
	set: Set,
	name: {
		ja: "パラレルシティ",
	},

	illustrator: "5ban Graphics",
	category: "Trainer",

	effect: {
		ja: "このカードは、上下の向きを選んでから場に出す。こちら側のプレイヤーがベンチに出せるポケモンの数は、3匹になる。（このカードが場に出たとき、ベンチに4匹以上いる場合は、こちら側のプレイヤーが、ベンチが3匹になるまでポケモンをトラッシュする。）",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 864276,
			},
		},
	],

	trainerType: "Stadium",
	rarity: "Promo",
};

export default card;
