import { Card } from "../../../interfaces";
import Set from "../S10a";

const card: Card = {
	set: Set,
	name: {
		ja: "かがやくハガネール",
		'zh-tw': "光輝大鋼蛇",
	},

	illustrator: "Sanosuke Sakuma",
	category: "Pokemon",
	hp: 170,
	types: ["Metal"],

	description: {
		ja: "イワークが １００年 以上 生きると 体の 成分が ダイヤのように 変化する という。",
		'zh-tw': "據說當大岩蛇活到了１００年以上，身體的成分 就會變得如同鑽石一般。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "エナジーストリーム",
				'zh-tw': "能量湍流",
			},
			damage: 20,
			cost: ["Colorless"],
			effect: {
				ja: "自分のトラッシュから[M]エネルギーを2枚まで選び、このポケモンにつける。",
				'zh-tw': "從自己的棄牌區選擇最多2張【鋼】能量卡，附於這隻寶可夢身上。",
			},
		},
		{
			name: {
				ja: "フィニッシュブレイク",
				'zh-tw': "終結破壞",
			},
			damage: "60+",
			cost: ["Metal", "Metal", "Colorless"],
			effect: {
				ja: "自分の山札の残り枚数が1枚になるように上からトラッシュし、その中にあるエネルギーの枚数×30ダメージ追加。",
				'zh-tw': "將自己的牌庫上方的卡丟棄直到剩餘張數變為1張為止，增加其中的能量卡的張數×30點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 656373,
				tcgplayer: 570713,
			},
		},
	],

	retreat: 4,
	regulationMark: "F",
	rarity: "Radiant Rare",
	dexId: [208],
};

export default card;
