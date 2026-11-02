import { Card } from "../../../interfaces";
import Set from "../S11";

const card: Card = {
	set: Set,
	name: {
		ja: "キュレムVMAX",
		'zh-tw': "酋雷姆VMAX",
	},

	illustrator: "N-DESIGN Inc.",
	category: "Pokemon",
	hp: 330,
	types: ["Water"],

	stage: "VMAX",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "はくぎんせかい",
				'zh-tw': "白銀世界",
			},
			effect: {
				ja: "自分の番に1回使える。自分の山札を上から1枚トラッシュし、そのカードが[W]エネルギーなら、自分のポケモンにつける。",
				'zh-tw': "在自己的回合時，可使用1次。將自己的牌庫上方1張卡丟棄，若那張卡為【水】能量卡，則附於自己的寶可夢身上。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "ダイフロスト",
				'zh-tw': "極巨冰霜",
			},
			damage: "120+",
			cost: ["Water", "Water", "Water"],
			effect: {
				ja: "このポケモンについている[W]エネルギーを好きなだけトラッシュし、その枚数×50ダメージ追加。",
				'zh-tw': "將這隻寶可夢身上附加的任意數量的【水】能量卡丟棄，增加其張數×50點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 667905,
				tcgplayer: 569961,
			},
		},
	],

	evolveFrom: {
		ja: "キュレムV",
	},

	retreat: 3,
	regulationMark: "F",
	rarity: "Triple Rare",
	dexId: [646],
};

export default card;
