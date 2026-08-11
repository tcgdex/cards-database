import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "ポワルン あまみずのすがた",
		'zh-tw': "飄浮泡泡 雨水的樣子",
	},

	illustrator: "sowsow",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		ja: "雨に 打たれる ポワルンの 姿。 シャワーを 浴びせた 実験では この 形に 変化しなかった。",
		'zh-tw': "飄浮泡泡被雨淋到時的樣子。在讓牠淋浴的實驗裡，牠並沒有變成這種形態。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "てんきよみ",
				'zh-tw': "看天",
			},
			effect: {
				ja: "自分のトラッシュに「スタジアム」が8枚以上あるなら、このポケモンがワザを使うためのエネルギーは、すべてなくなる。",
				'zh-tw': "若自己的棄牌區有8張以上的「競技場」卡，則這隻寶可夢使用招式所需的能量全部消除。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "レインシャワー",
				'zh-tw': "雨流浴",
			},
			cost: ["Water", "Colorless"],
			effect: {
				ja: "相手のポケモン全員に、それぞれ20ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
				'zh-tw': "對手的所有寶可夢各受到20點傷害。[在備戰區不計算弱點・抵抗力。]",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 586547,
				tcgplayer: 571285,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 578371,
			},
		},
	],

	retreat: 0,
	regulationMark: "E",
	rarity: "None",
	dexId: [351],
};

export default card;
