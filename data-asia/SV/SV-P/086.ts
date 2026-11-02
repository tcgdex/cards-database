import { Card } from "../../../interfaces";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		ja: "基本鋼エネルギー",
		'zh-tw': "雙重渦輪能量",
	},

	illustrator: "",
	category: "Energy",
	energyType: "Normal",

	effect: {
		ja: "&copy;Pokémon/Nintendo/Creatures/GAME FREAK ポケットモンスター・ポケモン・Pokémonは任天堂・クリーチャーズ・ゲームフリークの商標です。 このホームページに掲載された画像その他の内容の無断転載はお断りします。",
		'zh-tw': "只要這張卡附於寶可夢身上，視為提供2個【無】能量。 附有這張卡的寶可夢使用的招式，對對手的寶可夢造成的傷害「-20」點。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 727995,
				tcgplayer: 587844,
			},
		},
	],

	rarity: "Promo",
};

export default card;
