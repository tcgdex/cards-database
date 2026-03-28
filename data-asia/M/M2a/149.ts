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
		ja: "このカードは、自分の場に「テラスタル」のポケモンがいるときにしか使えない。 自分のベンチのポケモンを2匹まで選び、トラッシュから基本エネルギーを1枚ずつつける。 グッズは、自分の番に何枚でも使える。",
	},

	variants: [{"type": "normal"}],

	trainerType: "Item",
	regulationMark: "I",
	rarity: "Common",
};

export default card;
