import { Card } from "../../../interfaces";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		ja: "基本鋼エネルギー",
		'zh-tw': "利牙魚",
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
				cardmarket: 695785,
				tcgplayer: 587801,
			},
		},
	],

	rarity: "Promo",
};

export default card;
