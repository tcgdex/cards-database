import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "ポワルン たいようのすがた",
		'zh-tw': "飄浮泡泡 太陽的樣子",
	},

	illustrator: "Yuka Morii",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	description: {
		ja: "暑い 日差しを 浴びていると この姿に 変わる。 火照った 身体を 触ると パサパサするぞ。",
		'zh-tw': "暴露在烈日下就會變成這個樣子。如果去摸牠熱烘烘的身體，會感覺到乾巴巴的。",
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
				ja: "こうきあつブラスト",
				'zh-tw': "高氣壓爆破",
			},
			damage: 150,
			cost: ["Fire", "Fire", "Colorless"],
			effect: {
				ja: "場に出ている「スタジアム」をトラッシュする。トラッシュできないなら、このワザは失敗。",
				'zh-tw': "將場上的「競技場」丟棄。若無法丟棄，則這個招式失敗。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 586536,
				tcgplayer: 571274,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 578364,
			},
		},
	],

	retreat: 0,
	regulationMark: "E",
	rarity: "None",
	dexId: [351],
};

export default card;
