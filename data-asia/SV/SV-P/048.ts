import { Card } from "../../../interfaces";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ミライドン",
		'zh-tw': "普隆隆姆",
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],

	description: {
		ja: "詳細は よく わかっていない。 モトトカゲに 似た 印象だが はるかに 強く 冷酷なのだ。",
		'zh-tw': "在增加到了８個的汽缸裡 引爆混有毒素和岩石成分的 氣體來製造能量。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "するどいキバ",
				'zh-tw': "虛張聲勢",
			},
			damage: 30,
			cost: ["Colorless", "Colorless"],
		},
		{
			name: {
				ja: "ライトニングレーザー",
				'zh-tw': "宏大衝撞",
			},
			damage: 90,
			cost: ["Lightning", "Lightning", "Colorless"],
			effect: {
				ja: "相手のベンチポケモン1匹にも、30ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
				'zh-tw': "若自己手牌的張數比對手手牌的張數多，則增加80點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 695790,
				tcgplayer: 587805,
			},
		},
	],

	retreat: 1,
	regulationMark: "G",
	rarity: "Promo",
	dexId: [1008],
};

export default card;
