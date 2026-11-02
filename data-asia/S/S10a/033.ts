import { Card } from "../../../interfaces";
import Set from "../S10a";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒスイ ウインディ",
		'zh-tw': "洗翠 風速狗",
	},

	illustrator: "Oswaldo KATO",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	description: {
		ja: "燃え盛る炎 牙に纏わせ 食らい付く。 体躯 大柄なれど 陽動 鮮やかなりて 敵 翻弄せしむる姿 演舞の如し。",
		'zh-tw': "將猛烈燃燒的火焰纏繞在牙齒上撲向獵物。雖然體型很大，卻能以靈巧的假動作戲弄敵手，那姿態就像是舞蹈一般。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "はっぽうやぶれ",
				'zh-tw': "城破突圍",
			},
			damage: "10+",
			cost: [],
			effect: {
				ja: "自分の手札が1枚もないなら、150ダメージ追加。",
				'zh-tw': "若自己1張手牌都沒有，則增加150點傷害。",
			},
		},
		{
			name: {
				ja: "するどいキバ",
				'zh-tw': "銳利之牙",
			},
			damage: 100,
			cost: ["Fighting", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 656340,
				tcgplayer: 570696,
			},
		},
	],

	evolveFrom: {
		ja: "ヒスイ ガーディ",
	},

	retreat: 2,
	regulationMark: "F",
	rarity: "Rare",
	dexId: [59],
};

export default card;
