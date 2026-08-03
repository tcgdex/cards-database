import { Card } from "../../../interfaces";
import Set from "../S8";

const card: Card = {
	set: Set,
	name: {
		ja: "アゴジムシ",
		'zh-tw': "強顎雞母蟲",
	},

	illustrator: "Asako Ito",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		ja: "大きな 顎で 森の 地面を 掘って 巣穴を つくる。 甘い 樹液が 大好物。",
		'zh-tw': "會用巨大的顎部在森林中挖地製造巢穴。最喜歡甜甜的樹汁。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "たいでん",
				'zh-tw': "帶電",
			},
			cost: ["Colorless"],
			effect: {
				ja: "自分のトラッシュから[雷]エネルギーを1枚選び、このポケモンにつける。",
				'zh-tw': "從自己的棄牌區選擇1張【雷】能量卡，附於這隻寶可夢身上。",
			},
		},
		{
			name: {
				ja: "ふいをつく",
				'zh-tw': "偷襲",
			},
			damage: 50,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "コインを1回投げウラなら、このワザは失敗。",
				'zh-tw': "擲1次硬幣若為反面，則這個招式失敗。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 575560,
				tcgplayer: 569511,
			},
		},
	],

	retreat: 2,
	regulationMark: "E",
	rarity: "Common",
	dexId: [736],
};

export default card;
