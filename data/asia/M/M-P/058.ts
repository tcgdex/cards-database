import { Card } from "../../../interfaces";
import Set from "../M-P";

const card: Card = {
	set: Set,
	name: {
		ja: "トレーナーズポスト",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		ja: "自分の山札を上から4枚見る。その中からトレーナーズ（「トレーナーズポスト」をのぞく）を1枚選び、相手に見せてから、手札に加える。残りのカードは山札にもどし、山札を切る。",
	},

	variants: [{ type: "normal" }],

	trainerType: "Item",
	rarity: "Promo",
};

export default card;
