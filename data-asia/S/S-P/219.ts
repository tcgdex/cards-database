import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ウオノラゴンV",
		'zh-tw': "洛奇亞V",
	},

	illustrator: "Satoshi Shirai",
	category: "Pokemon",
	hp: 220,
	types: ["Dragon"],

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ガブガブクラッシュ",
				'zh-tw': "讀風",
			},
			damage: "60+",
			cost: ["Grass", "Water"],
			effect: {
				ja: "ダメージを与える前に、相手のバトルポケモンについている「ポケモンのどうぐ」をトラッシュする。トラッシュした場合、120ダメージ追加。",
				'zh-tw': "將自己的1張手牌丟棄。然後，從自己的牌庫抽出3張卡。",
			},
		},
		{
			name: {
				ja: "ドラゴンストライク",
				'zh-tw': "氣旋俯衝",
			},
			damage: 210,
			cost: ["Grass", "Water", "Water"],
			effect: {
				ja: "次の自分の番、このポケモンは「ドラゴンストライク」が使えない。",
				'zh-tw': "若希望，將場上的競技場卡丟棄。",
			},
		},
	],

	weaknesses: [],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 574587,
				tcgplayer: 597403,
			},
		},
	],

	retreat: 3,
	regulationMark: "E",
	rarity: "Promo",
	dexId: [882],
};

export default card;
