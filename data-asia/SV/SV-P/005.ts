import { Card } from "../../../interfaces";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ミライドン",
		'zh-tw': "操陷蛛",
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],

	description: {
		ja: "詳細は よく わかっていない。 モトトカゲに 似た 印象だが はるかに 強く 冷酷なのだ。",
		'zh-tw': "用絲線吸附在樹枝或天花板上 無聲無息地移動。會在自己 被察覺到之前將獵物打倒。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "するどいキバ",
				'zh-tw': "千絲束縛",
			},
			damage: 30,
			cost: ["Colorless", "Colorless"],
		},
		{
			name: {
				ja: "ライトニングレーザー",
				'zh-tw': "噴射頭擊",
			},
			damage: 90,
			cost: ["Lightning", "Lightning", "Colorless"],
			effect: {
				ja: "相手のベンチポケモン1匹にも、30ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 692252,
				tcgplayer: 587762,
			},
		},
	],

	retreat: 1,
	regulationMark: "G",
	rarity: "Promo",
	dexId: [1008],
};

export default card;
