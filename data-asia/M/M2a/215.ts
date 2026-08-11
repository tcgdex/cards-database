import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "ガラスのラッパ",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		ja: "このカードは、自分の場に「テラスタル」のポケモンがいるときにしか使えない。自分のベンチの[C]ポケモンを2匹まで選び、トラッシュから基本エネルギーを1枚ずつつける。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 861458,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "H",
	rarity: "Ultra Rare",
};

export default card;
