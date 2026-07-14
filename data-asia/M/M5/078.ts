import { Card } from "../../../interfaces";
import Set from "../M5";

const card: Card = {
	set: Set,
	name: {
		ja: "ムク",
	},

	illustrator: "nagimiso",
	category: "Trainer",

	effect: {
		ja: "自分の手札からポケモン（「ルールを持つポケモン」をのぞく）を2枚までトラッシュし、その枚数×3枚ぶん、山札を引く。",
	},

	variants: [{ type: "normal" }],

	trainerType: "Supporter",
	regulationMark: "J",
	rarity: "Uncommon",

	thirdParty: {
		cardmarket: 888350,
	},
};

export default card;
