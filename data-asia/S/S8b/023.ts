import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "マルヤクデVMAX",
		'zh-tw': "焚焰蚣VMAX",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 320,
	types: ["Fire"],

	stage: "VMAX",

	attacks: [
		{
			name: {
				ja: "キョダイヒャッカ",
				'zh-tw': "超極巨百火焚野",
			},
			damage: "40+",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "このポケモンについている[炎]エネルギーの数×40ダメージ追加。のぞむなら、ダメージを与えたあとに、自分のトラッシュから[炎]エネルギーを1枚選び、このポケモンにつける。",
				'zh-tw': "增加這隻寶可夢身上附加的【火】能量的數量×40點傷害。若希望，在造成傷害後，從自己的棄牌區選擇1張【火】能量卡，附於這隻寶可夢身上。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 586538,
				tcgplayer: 571276,
			},
		},
	],

	evolveFrom: {
		ja: "マルヤクデV",
	},

	retreat: 3,
	regulationMark: "D",
	rarity: "Triple Rare",
	dexId: [851],
};

export default card;
