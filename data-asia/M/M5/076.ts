import { Card } from "../../../interfaces";
import Set from "../M5";

const card: Card = {
	set: Set,
	name: {
		ja: "グラジオの決戦",
	},

	illustrator: "akagi",
	category: "Trainer",

	effect: {
		ja: "このカードは、自分の手札がこのカード1枚だけのときにしか使えない。この番、自分のポケモン（「ルールを持つポケモン」をのぞく）が使うワザの、相手のバトルポケモンへのダメージは「+80」される。",
	},

	variants: [{ type: "normal" }],

	trainerType: "Supporter",
	regulationMark: "J",
	rarity: "Uncommon",

	thirdParty: {
		cardmarket: 888348,
	},
};

export default card;
