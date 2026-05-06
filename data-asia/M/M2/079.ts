import { Card } from "../../../interfaces";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		ja: "バトルコロシアム",
	},

	illustrator: "MARINA Chikazawa",
	category: "Trainer",

	effect: {
		ja: "おたがいのベンチポケモン全員は、相手のワザや特性の効果で、ダメカンがのらない。［ワザのダメージは受ける。］ スタジアムは、自分の番に1枚、バトル場の横に出せる。別のスタジアムが場に出たなら、このカードをトラッシュする。同じ名前のスタジアムは場に出せない。",
	},

	variants: [{"type": "normal"}],

	trainerType: "Stadium",
	regulationMark: "I",
	rarity: "Uncommon",

	thirdParty: {
		cardmarket: 850587,
		tcgplayer: 655858,
	},
};

export default card;