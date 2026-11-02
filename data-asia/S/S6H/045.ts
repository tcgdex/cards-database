import { Card } from "../../../interfaces";
import Set from "../S6H";

const card: Card = {
	set: Set,
	name: {
		ja: "ガラル ヤドキング",
		'zh-tw': "伽勒爾 呆呆王",
	},

	illustrator: "Naoki Saito",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],

	description: {
		ja: "妖しげな 呪文を 唱えながら 食べた ものと 体内の 毒素を 混ぜて 怪しい 薬を 作る。",
		'zh-tw': "會一邊吟唱詭怪的咒語，一邊混合吃進的東西和體內的毒素來製造可疑的藥。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "ひみつのくすり",
				'zh-tw': "秘密藥",
			},
			effect: {
				ja: "自分の番に1回使える。自分のポケモンを1匹選び、コインを1回投げる。オモテなら、そのポケモンのHPを「90」回復する。ウラなら、そのポケモンにダメカンを3個のせる。",
				'zh-tw': "在自己的回合時，可使用1次。選擇自己的1隻寶可夢，擲1次硬幣。若為正面，則將那隻寶可夢恢復「90」HP。若為反面，則在那隻寶可夢身上放置3個傷害指示物。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "しるをとばす",
				'zh-tw': "噴汁",
			},
			damage: 90,
			cost: ["Darkness", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 560461,
				tcgplayer: 569177,
			},
		},
	],

	evolveFrom: {
		ja: "ガラル ヤドラン",
	},

	retreat: 3,
	regulationMark: "E",
	rarity: "Rare",
	dexId: [199],
};

export default card;
