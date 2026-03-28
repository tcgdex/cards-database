import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "ロケット団のファクトリー",
	},

	illustrator: "imoniii",
	category: "Trainer",

	effect: {
		ja: "この番に、手札から、名前に「ロケット団」とつくサポートを出して使っていたプレイヤーは、自分の番ごとに1回、自分の山札を2枚引いてよい。 スタジアムは、自分の番に1枚、バトル場の横に出せる。別のスタジアムが場に出たなら、このカードをトラッシュする。同じ名前のスタジアムは場に出せない。",
	},

	variants: [{"type": "normal"}],

	trainerType: "Stadium",
	regulationMark: "I",
	rarity: "Common",
};

export default card;
