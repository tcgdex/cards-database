import { Card } from "../../../interfaces";
import Set from "../M-P";

const card: Card = {
	set: Set,
	name: {
		ja: "スペシャルチャージ",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		ja: "自分のトラッシュから特殊エネルギーを2枚選び、相手に見せてから、山札にもどす。そして山札を切る。",
	},

	variants: [{ type: "normal" }],

	trainerType: "Item",
	rarity: "Promo",
};

export default card;
