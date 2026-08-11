import { Card } from "../../../interfaces";
import Set from "../S10a";

const card: Card = {
	set: Set,
	name: {
		ja: "ジバコイルVSTAR",
		'zh-tw': "自爆磁怪VSTAR",
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 270,
	types: ["Lightning"],

	stage: "VSTAR",

	attacks: [
		{
			name: {
				ja: "マグネグリップ",
				'zh-tw': "磁力緊握",
			},
			damage: 180,
			cost: ["Lightning", "Colorless", "Colorless"],
			effect: {
				ja: "自分の山札からグッズを2枚まで選び、相手に見せて、手札に加える。そして山札を切る。",
				'zh-tw': "從自己的牌庫選擇最多2張物品卡，在給對手看過後加入手牌。並且重洗牌庫。",
			},
		},
		{
			name: {
				ja: "エレクトロスター",
				'zh-tw': "[VSTAR力量]電子星星",
			},
			cost: ["Lightning", "Lightning"],
			effect: {
				ja: "相手のベンチポケモン2匹に、それぞれ90ダメージ。［ベンチは弱点・抵抗力を計算しない。］［対戦中、自分はVSTARパワーを1回しか使えない。］",
				'zh-tw': "對手的2隻備戰寶可夢各受到90點傷害。[在備戰區不計算弱點・抵抗力。][對戰中，己方只可使用1次【VSTAR】力量。]",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 656272,
				tcgplayer: 570680,
			},
		},
	],

	evolveFrom: {
		ja: "ジバコイルV",
	},

	retreat: 2,
	regulationMark: "F",
	rarity: "Triple Rare",
	dexId: [462],
};

export default card;
