import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "バシャーモVMAX",
		'zh-tw': "火焰雞VMAX",
	},

	illustrator: "AKIRA EGAWA",
	category: "Pokemon",
	hp: 320,
	types: ["Fire"],

	stage: "VMAX",

	attacks: [
		{
			name: {
				ja: "わしづかみ",
				'zh-tw': "緊抓",
			},
			damage: 60,
			cost: ["Fire"],
			effect: {
				ja: "次の相手の番、このワザを受けたポケモンは、にげられない。",
				'zh-tw': "在下個對手的回合，受到這個招式的寶可夢無法撤退。",
			},
		},
		{
			name: {
				ja: "ダイブレイズ",
				'zh-tw': "極巨火焰",
			},
			damage: 130,
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "自分のベンチの「れんげき」のポケモンを2匹まで選び、自分のトラッシュからエネルギーを1枚ずつつける。",
				'zh-tw': "選擇最多2隻自己的備戰區的「連擊」寶可夢，從自己的棄牌區附給那些寶可夢各1張能量卡。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 586535,
				tcgplayer: 571273,
			},
		},
	],

	evolveFrom: {
		ja: "バシャーモV",
	},

	retreat: 2,
	regulationMark: "E",
	rarity: "Triple Rare",
	dexId: [257],
};

export default card;
