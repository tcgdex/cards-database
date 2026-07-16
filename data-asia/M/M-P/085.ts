import { Card } from "../../../interfaces";
import Set from "../M-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ポケパッド",
	},

	illustrator: "Studio Bora Inc.",
	category: "Trainer",

	effect: {
		ja: "自分の山札からポケモン（「ルールを持つポケモン」をのぞく）を1枚選び、相手に見せて、手札に加える。そして山札を切る。",
	},

	variants: [{ type: "normal" }],

	trainerType: "Item",
	regulationMark: "J",
	rarity: "Promo",
};

export default card;
