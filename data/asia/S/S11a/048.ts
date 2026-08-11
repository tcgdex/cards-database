import { Card } from "../../../interfaces";
import Set from "../S11a";

const card: Card = {
	set: Set,
	name: {
		ja: "ギギギアル",
		'zh-tw': "齒輪怪",
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 160,
	types: ["Metal"],

	description: {
		ja: "棘の 先から 強い 電撃を 発射。 赤いコアに たくさんの エネルギーを 蓄えている。",
		'zh-tw': "會從尖刺的前端發出強力電擊。紅色核心裡填充著非常多的能量。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "トリプルギア",
				'zh-tw': "三重齒輪",
			},
			effect: {
				ja: "自分の番に、このカードを手札から出して進化させたとき、1回使える。自分の山札から基本エネルギーを3枚まで選び、自分のポケモンに好きなようにつける。そして山札を切る。",
				'zh-tw': "在自己的回合，當從手牌使出這張卡並完成進化時，可使用1次。從自己的牌庫選擇最多3張基本能量卡，以任意方式附於自己的寶可夢身上。並且重洗牌庫。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "パワービーム",
				'zh-tw': "强力光束",
			},
			damage: 130,
			cost: ["Metal", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 673046,
				tcgplayer: 570811,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				tcgplayer: 570895,
			},
		},
	],

	evolveFrom: {
		ja: "ギギアル",
	},

	retreat: 3,
	regulationMark: "F",
	rarity: "Uncommon",
	dexId: [601],
};

export default card;
