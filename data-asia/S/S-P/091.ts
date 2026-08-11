import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "基本炎エネルギー",
		'zh-tw': "古茲馬",
	},

	illustrator: "",
	category: "Energy",
	energyType: "Normal",

	effect: {
		ja: "&copy;Pokémon/Nintendo/Creatures/GAME FREAK ポケットモンスター・ポケモン・Pokémonは任天堂・クリーチャーズ・ゲームフリークの商標です。 このホームページに掲載された画像その他の内容の無断転載はお断りします。",
		'zh-tw': "選擇對手的1隻備戰寶可夢，與戰鬥寶可夢互換。然後，將自己的戰鬥寶可夢與備戰寶可夢互換。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 525140,
				tcgplayer: 649756,
			},
		},
	],

	rarity: "Promo",
};

export default card;
