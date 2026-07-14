import { Card } from "../../../interfaces";
import Set from "../M5";

const card: Card = {
	set: Set,
	name: {
		ja: "ごうかいボム",
	},

	illustrator: "inose yukie",
	category: "Trainer",

	effect: {
		ja: "このカードをつけているポケモン（「メガシンカex」をのぞく）が、バトル場で相手の「メガシンカex」から「240」以上のワザのダメージを受けたとき、ワザを使ったポケモンにダメカンを12個のせる。その後、このカードをトラッシュする。",
	},

	variants: [{ type: "normal" }],

	trainerType: "Tool",
	regulationMark: "J",
	rarity: "Uncommon",

	thirdParty: {
		cardmarket: 888345,
	},
};

export default card;
