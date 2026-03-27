import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "ハイパールージュ アンジェ&フロエッテ",
	},

	illustrator: "Kazuya Fujishima",
	category: "Trainer",
	trainerType: "Stadium",

	effect: {
		ja: "自分のポケモンが相手のワザのダメージを受けてきぜつしたとき、そのポケモンについているエネルギーを2枚まで手札に加えることができる。",
	},

	variants: [{ type: "normal" }, { type: "reverse", foil: "pokeball" }, { type: "reverse", foil: "masterball" }],

	regulationMark: "I",
	rarity: "Uncommon",
};

export default card;
