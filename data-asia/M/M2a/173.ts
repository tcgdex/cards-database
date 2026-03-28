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
		ja: "このカードは、自分の場に「Nのヒヒダルマ」「Nのゾロアークex」「Nのバイバニラ」「Nのギギギアル」「Nのレシラム」「Nのゼクロム」がいなければ使えない。 この番、自分の「Nのポケモン」が使うワザのダメージで、相手のバトルポケモンがきぜつしたなら、サイドを3枚多くとる。 サポートは、自分の番に1枚しか使えない。",
	},

	variants: [{"type": "normal"}],

	trainerType: "Supporter",
	regulationMark: "I",
	rarity: "Common",
};

export default card;
