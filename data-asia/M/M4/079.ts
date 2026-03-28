import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "アンジュフラエッテ",
	},

	illustrator: "MARINA Chikazawa",
	category: "Trainer",

	effect: {
		ja: "このカードは、場に出ている「プリズムタワー」をトラッシュしなければ場に出せず、「プリズムタワー」を出した番でも場に出せる。 おたがいの場の「メガフラエッテex」全員は、それぞれ最大HPが「+150」される。 スタジアムは、自分の番に1枚、バトル場の横に出せる。別のスタジアムが場に出たなら、このカードをトラッシュする。同じ名前のスタジアムは場に出せない。",
	},

	variants: [{"type": "normal"}],

	trainerType: "Stadium",
	regulationMark: "I",
	rarity: "Uncommon",
};

export default card;
