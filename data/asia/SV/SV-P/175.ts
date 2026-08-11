import { Card } from "models/database/card";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "基本草エネルギー",
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
				cardmarket: 778401,
			},
		},
	],

	rarity: "Promo",
};

export default card;
