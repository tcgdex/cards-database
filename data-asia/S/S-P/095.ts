import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "基本闘エネルギー",
		'zh-tw': "斑斑馬",
	},

	illustrator: "",
	category: "Energy",
	energyType: "Normal",

	effect: {
		ja: "&copy;Pokémon/Nintendo/Creatures/GAME FREAK ポケットモンスター・ポケモン・Pokémonは任天堂・クリーチャーズ・ゲームフリークの商標です。 このホームページに掲載された画像その他の内容の無断転載はお断りします。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 525160,
				tcgplayer: 649798,
			},
		},
	],

	rarity: "Promo",
};

export default card;
