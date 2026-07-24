import { Card } from "../../../interfaces";
import Set from "../SM11";

const card: Card = {
	set: Set,
	name: {
		ja: "ジャイアントボム",
	},

	illustrator: "",
	category: "Trainer",

	effect: {
		ja: "ポケモンについているこのカードは、相手の番の終わりにトラッシュする。 このカードをつけているポケモンが、バトル場で相手のポケモンから「180」以上のワザのダメージを受けたとき、ワザを使ったポケモンにダメカンを10個のせる。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 557076,
			},
		},
	],

	trainerType: "Tool",
	regulationMark: "C",
	rarity: "Secret Rare",
};

export default card;
