import { Card } from "../../../interfaces";
import Set from "../S6H";

const card: Card = {
	set: Set,
	name: {
		ja: "ボルケニオンV",
		'zh-tw': "波爾凱尼恩V",
	},

	illustrator: "Ryota Murayama",
	category: "Pokemon",
	hp: 220,
	types: ["Fire"],

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ヒートブラスト",
				'zh-tw': "雙重金勾臂",
			},
			damage: 50,
			cost: ["Fire", "Colorless"],
		},
		{
			name: {
				ja: "ダイナマイトタックル",
				'zh-tw': "蟹鉗錘",
			},
			damage: "100+",
			cost: ["Fire", "Fire", "Colorless"],
			effect: {
				ja: "このポケモンにダメカンが10個以上のっているなら、150ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 560430,
				tcgplayer: 569146,
			},
		},
	],

	retreat: 3,
	regulationMark: "E",
	rarity: "Double rare",
	dexId: [721],
};

export default card;
