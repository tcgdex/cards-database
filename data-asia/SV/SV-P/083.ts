import { Card } from "../../../interfaces";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		ja: "基本超エネルギー",
		'zh-tw': "反擊捕捉器",
	},

	illustrator: "",
	category: "Energy",
	energyType: "Normal",

	effect: {
		ja: "&copy;Pokémon/Nintendo/Creatures/GAME FREAK ポケットモンスター・ポケモン・Pokémonは任天堂・クリーチャーズ・ゲームフリークの商標です。 このホームページに掲載された画像その他の内容の無断転載はお断りします。",
		'zh-tw': "這張卡只有在自己剩餘獎賞卡的張數比對手剩餘獎賞卡的張數多時才可使用。 選擇1隻對手的備戰寶可夢，與戰鬥寶可夢互換。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 727992,
				tcgplayer: 587841,
			},
		},
	],

	rarity: "Promo",
};

export default card;
