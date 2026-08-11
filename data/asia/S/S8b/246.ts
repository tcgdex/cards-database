import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "ムゲンダイナV",
	},

	illustrator: "kodama",
	category: "Pokemon",
	hp: 220,
	types: ["Darkness"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "パワーアクセル" },
			damage: 30,
			cost: ["Colorless"],
			effect: {
				ja: "のぞむなら、自分の手札から[悪]エネルギーを1枚選び、ベンチポケモンにつける。",
			},
		},
		{
			name: { ja: "ダイマックスほう" },
			damage: "120+",
			cost: ["Darkness", "Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンが「ポケモンVMAX」なら、120ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 587044,
				tcgplayer: 571498,
			},
		},
	],

	retreat: 2,
	regulationMark: "D",
	rarity: "Character Super Rare",
	dexId: [890],
};

export default card;
