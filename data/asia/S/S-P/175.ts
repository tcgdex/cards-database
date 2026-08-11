import { Card } from "models/database/card";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "セレビィV",
		'zh-tw': "皮卡丘",
	},

	illustrator: "Teeziro",
	category: "Pokemon",
	hp: 190,
	types: ["Grass"],

	stage: "Basic",

	attacks: [
		{
			name: {
				'ja-jp': "わかばのまい",
				'zh-tw': "親送之禮",
			},
			cost: ["Grass"],
			effect: {
				'ja-jp': "自分の手札から[草]エネルギーを好きなだけ選び、自分のポケモンに好きなようにつける。",
				'zh-tw': "擲1次硬幣若為正面，則從自己的牌庫選擇1張物品卡，在給對手看過後加入手牌。並且重洗牌庫。",
			},
		},
		{
			name: {
				'ja-jp': "スラッシュバック",
				'zh-tw': "皮卡球",
			},
			damage: 60,
			cost: ["Grass", "Colorless"],
			effect: {
				'ja-jp': "このポケモンをベンチポケモンと入れ替える。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561784,
				tcgplayer: 597373,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "Promo",
	dexId: [251],
};

export default card;
