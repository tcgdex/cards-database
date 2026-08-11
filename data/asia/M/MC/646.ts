import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "スクランブルスイッチ",
	},

	illustrator: "Ayaka Yoshida",
	category: "Trainer",

	effect: {
		ja: "自分のバトルポケモンをベンチポケモンと入れ替える。その後、入れ替えたポケモンについているエネルギーを好きなだけ選び、新しくバトル場に出したポケモンにつけ替える。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863948,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "H",
	rarity: "None",
};

export default card;
