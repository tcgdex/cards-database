import { Card } from "models/database/card";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "基本超エネルギー",
	},

	illustrator: "",
	category: "Energy",
	energyType: "Normal",

	effect: {
		'ja-jp': "&copy;Pokémon/Nintendo/Creatures/GAME FREAK ポケットモンスター・ポケモン・Pokémonは任天堂・クリーチャーズ・ゲームフリークの商標です。 このホームページに掲載された画像その他の内容の無断転載はお断りします。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 605828,
				tcgplayer: 649803,
			},
		},
	],

	rarity: "Promo",
};

export default card;
