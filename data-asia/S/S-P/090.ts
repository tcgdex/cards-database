import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "基本草エネルギー",
		'zh-tw': "莉莉艾",
	},

	illustrator: "",
	category: "Energy",
	energyType: "Normal",

	effect: {
		ja: "&copy;Pokémon/Nintendo/Creatures/GAME FREAK ポケットモンスター・ポケモン・Pokémonは任天堂・クリーチャーズ・ゲームフリークの商標です。 このホームページに掲載された画像その他の内容の無断転載はお断りします。",
		'zh-tw': "從牌庫抽卡直到自己的手牌滿6張為止。若在自己的最初回合使用，則抽卡直到滿8張為止。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 525135,
				tcgplayer: 649918,
			},
		},
	],

	rarity: "Promo",
};

export default card;
