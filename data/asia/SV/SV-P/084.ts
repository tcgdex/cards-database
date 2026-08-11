import { Card } from "../../../interfaces";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		ja: "基本闘エネルギー",
		'zh-tw': "大地之容器",
	},

	illustrator: "",
	category: "Energy",
	energyType: "Normal",

	effect: {
		ja: "&copy;Pokémon/Nintendo/Creatures/GAME FREAK ポケットモンスター・ポケモン・Pokémonは任天堂・クリーチャーズ・ゲームフリークの商標です。 このホームページに掲載された画像その他の内容の無断転載はお断りします。",
		'zh-tw': "這張卡必須將自己的1張手牌丟棄才可使用。 從自己的牌庫選擇最多2張基本能量卡，在給對手看過後加入手牌。並且重洗牌庫。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 727993,
				tcgplayer: 587842,
			},
		},
	],

	rarity: "Promo",
};

export default card;
