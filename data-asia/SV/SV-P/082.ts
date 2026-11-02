import { Card } from "../../../interfaces";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		ja: "基本雷エネルギー",
		'zh-tw': "交替推車",
	},

	illustrator: "",
	category: "Energy",
	energyType: "Normal",

	effect: {
		ja: "&copy;Pokémon/Nintendo/Creatures/GAME FREAK ポケットモンスター・ポケモン・Pokémonは任天堂・クリーチャーズ・ゲームフリークの商標です。 このホームページに掲載された画像その他の内容の無断転載はお断りします。",
		'zh-tw': "將自己的戰鬥場的【基礎】寶可夢與備戰寶可夢互換。然後，將換入備戰區的寶可夢恢復「30」HP。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 727991,
				tcgplayer: 587840,
			},
		},
	],

	rarity: "Promo",
};

export default card;
