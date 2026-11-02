import { Card } from "../../../interfaces";
import Set from "../S6K";

const card: Card = {
	set: Set,
	name: {
		ja: "ヤヤコマ",
		'zh-tw': "小箭雀",
	},

	illustrator: "Sumiyoshi Kizuki",
	category: "Pokemon",
	hp: 40,
	types: ["Colorless"],

	description: {
		ja: "身体は いつでも 暖かい。 寒い 地域の トレーナーは ベッドで 一緒に 寝るらしい。",
		'zh-tw': "身體總是很溫暖。寒冷地區的訓練家似乎會和牠一起睡在床上。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "おいかぜドロー",
				'zh-tw': "順風抽出",
			},
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札を1枚引く。後攻プレイヤーの最初の番なら、さらに3枚引く。",
				'zh-tw': "從自己的牌庫抽出1張卡。若在後攻玩家的最初回合使用，則再抽出3張卡。",
			},
		},
		{
			name: {
				ja: "ふいをつく",
				'zh-tw': "偷襲",
			},
			damage: 20,
			cost: ["Colorless"],
			effect: {
				ja: "コインを1回投げウラなら、このワザは失敗。",
				'zh-tw': "擲1次硬幣若為反面，則這個招式失敗。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560843,
				tcgplayer: 569283,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "Common",
	dexId: [661],
};

export default card;
