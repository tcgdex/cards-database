import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "ロケット団のアポロ",
	},

	illustrator: "Hideki Ishikawa",
	category: "Trainer",

	effect: {
		ja: "このカードは、前の相手の番に、自分の「ロケット団のポケモン」がきぜつしていなければ使えない。 おたがいのプレイヤーは、それぞれ手札をすべて山札にもどして切る。その後、自分は5枚、相手は3枚、山札を引く。 サポートは、自分の番に1枚しか使えない。",
	},

	variants: [{"type": "normal"}],

	trainerType: "Supporter",
	regulationMark: "I",
	rarity: "Common",
};

export default card;
