import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "バーベナとヘレナ",
	},

	illustrator: "Sanosuke Sakuma",
	category: "Trainer",

	effect: {
		ja: "このカードは、自分の場に「Nのヒヒダルマ」「Nのゾロアークex」「Nのバイバニラ」「Nのギギギアル」「Nのレシラム」「Nのゼクロム」がいなければ使えない。この番、自分の「Nのポケモン」が使うワザのダメージで、相手のバトルポケモンがきぜつしたなら、サイドを3枚多くとる。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 861416,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "I",
	rarity: "None",
};

export default card;
