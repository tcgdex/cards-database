import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "基本水エネルギー",
		'zh-tw': "竹蘭",
	},

	illustrator: "",
	category: "Energy",
	energyType: "Normal",

	effect: {
		ja: "&copy;Pokémon/Nintendo/Creatures/GAME FREAK ポケットモンスター・ポケモン・Pokémonは任天堂・クリーチャーズ・ゲームフリークの商標です。 このホームページに掲載された画像その他の内容の無断転載はお断りします。",
		'zh-tw': "將自己的手牌全部放回牌庫並重洗。然後，從牌庫抽出6張。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 525145,
				tcgplayer: 649795,
			},
		},
	],

	rarity: "Promo",
};

export default card;
