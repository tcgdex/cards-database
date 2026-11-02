import { Card } from "../../../interfaces";
import Set from "../S7D";

const card: Card = {
	set: Set,
	name: {
		ja: "ガラル ニャイキング",
		'zh-tw': "伽勒爾 喵頭目",
	},

	illustrator: "Shigenori Negishi",
	category: "Pokemon",
	hp: 120,
	types: ["Metal"],

	description: {
		ja: "戦いに 明け暮れて 進化した 結果 伸ばすと 短剣に 変わる 物騒な ツメを 手に入れた。",
		'zh-tw': "在日復一日的戰鬥中得以進化。進化的結果是那危險的指甲，留長後能當作短劍來用。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "げきをとばす",
				'zh-tw': "鼓勵",
			},
			cost: ["Metal"],
			effect: {
				ja: "自分の山札から基本エネルギーを2枚まで選び、自分のポケモンに好きなようにつける。そして山札を切る。",
				'zh-tw': "從自己的牌庫選擇最多2張基本能量卡，以任意方式附於自己的寶可夢身上。並且重洗牌庫。",
			},
		},
		{
			name: {
				ja: "ヘッドバング",
				'zh-tw': "鐵頭碰",
			},
			damage: 80,
			cost: ["Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 571618,
				tcgplayer: 569358,
			},
		},
	],

	evolveFrom: {
		ja: "ガラル ニャース",
	},

	retreat: 1,
	regulationMark: "E",
	rarity: "Uncommon",
	dexId: [863],
};

export default card;
