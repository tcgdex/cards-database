import { Card } from "../../../interfaces";
import Set from "../S6K";

const card: Card = {
	set: Set,
	name: {
		ja: "マニューラ",
		'zh-tw': "瑪狃拉",
	},

	illustrator: "Taira Akitsu",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	description: {
		ja: "ツメで サインを 描き 仲間と 連絡。 サインの 種類は ５００以上 あると いう。",
		'zh-tw': "透過用爪子留下記號來與夥伴聯絡。據說記號的種類有５００種以上。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "にげきひっさつ",
				'zh-tw': "雙擊必殺",
			},
			cost: ["Colorless"],
			effect: {
				ja: "次の自分の番、このワザを受けたポケモンは、「れんげき」のポケモンからワザのダメージを受けたらきぜつする。",
				'zh-tw': "在下個自己的回合，受到這個招式的寶可夢若受到「連擊」寶可夢招式的傷害，會【氣絕】。",
			},
		},
		{
			name: {
				ja: "わるだくみ",
				'zh-tw': "詭計",
			},
			cost: ["Water"],
			effect: {
				ja: "自分の山札から好きなカードを2枚まで選び、手札に加える。そして山札を切る。",
				'zh-tw': "從自己的牌庫任意選擇最多2張卡加入手牌。並且重洗牌庫。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 560750,
				tcgplayer: 569240,
			},
		},
	],

	evolveFrom: {
		ja: "ニューラ",
	},

	retreat: 1,
	regulationMark: "E",
	rarity: "Rare",
	dexId: [461],
};

export default card;
