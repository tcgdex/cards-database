import { Card } from "../../../interfaces";
import Set from "../S10P";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒスイ マルマイン",
		'zh-tw': "洗翠 頑皮雷彈",
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	description: {
		ja: "体表の組織 ぼんぐりの成分と 極めて 近く 不思議。 苛立ちしときに 放つ 電流は 落雷 ２０回分に 匹敵す。",
		'zh-tw': "體表的組織與球果的成分極為接近， 不可思議。當牠情緒焦躁時所放出 的電流，能量足以匹敵２０次的落雷。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "トリプルドロー",
				'zh-tw': "三重抽出",
			},
			cost: [],
			effect: {
				ja: "自分の山札を3枚引く。",
				'zh-tw': "從自己的牌庫抽出3張卡。",
			},
		},
		{
			name: {
				ja: "イライラボム",
				'zh-tw': "煩煩炸彈",
			},
			damage: 50,
			cost: [],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 651062,
				tcgplayer: 569846,
			},
		},
	],

	evolveFrom: {
		ja: "ヒスイ ビリリダマ",
	},

	retreat: 1,
	regulationMark: "F",
	rarity: "Common",
	dexId: [101],
};

export default card;
