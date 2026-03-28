import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "ロケット団のサカキ",
	},

	illustrator: "akagi",
	category: "Trainer",

	effect: {
		ja: "自分のバトル場の「ロケット団のポケモン」を、ベンチの「ロケット団のポケモン」と入れ替える。その後、相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。 サポートは、自分の番に1枚しか使えない。",
	},

	variants: [{"type": "normal"}],

	trainerType: "Supporter",
	regulationMark: "I",
	rarity: "Common",
};

export default card;
