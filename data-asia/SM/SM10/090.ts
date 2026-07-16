import { Card } from "../../../interfaces";
import Set from "../SM10";

const card: Card = {
	set: Set,
	name: {
		ja: "ダストアイランド",
	},

	illustrator: "Ryo Ueda",
	category: "Trainer",

	effect: {
		ja: "おたがいのプレイヤーが、自分のどくのバトルポケモンをトレーナーズの効果でベンチポケモンと入れ替えたとき、新しく出てきたポケモンが、そのどくを引きつぐ。（どくでのせるダメカンの数が増えているなら、その数も引きつぐ。）",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557448,
			},
		},
	],

	trainerType: "Stadium",
	regulationMark: "C",
	rarity: "Uncommon",
};

export default card;
