import { Card } from "../../../interfaces";
import Set from "../SV6a";

const card: Card = {
	set: Set,
	name: {
		ja: "トリミアン",
		'zh-tw': "多麗米亞",
	},

	illustrator: "Shinya Komatsu",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],

	description: {
		ja: "ボサボサの 体毛を 刈りこむと 姿が 美しくなる だけでなく 身体の キレが 良くなるのだ。",
		'zh-tw': "修整好蓬亂的體毛後， 不只是模樣變得美麗， 就連身體也會變得更敏捷。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "エネアシスト",
				'zh-tw': "能量支援",
			},
			damage: 30,
			cost: ["Colorless"],
			effect: {
				ja: "自分のトラッシュから基本エネルギーを1枚選び、ベンチポケモンにつける。",
				'zh-tw': "從自己的棄牌區選擇1張基本能量卡，附於備戰寶可夢身上。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 773800,
				tcgplayer: 566302,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "Common",
	dexId: [676],
};

export default card;
