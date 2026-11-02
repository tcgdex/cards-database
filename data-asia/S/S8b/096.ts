import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "ガラル ファイヤーV",
		'zh-tw': "伽勒爾 火焰鳥V",
	},

	illustrator: "aky CG Works",
	category: "Pokemon",
	hp: 220,
	types: ["Darkness"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "じゃえんのつばさ",
				'zh-tw': "邪焰之翼",
			},
			effect: {
				ja: "自分の番に1回使える。自分のトラッシュから[悪]エネルギーを1枚選び、このポケモンにつける。この番、すでに別の「じゃえんのつばさ」を使っていたなら、この特性は使えない。",
				'zh-tw': "在自己的回合時，可使用1次。從自己的棄牌區選擇1張【惡】能量卡，附於這隻寶可夢身上。在這個回合，若已經使出了其他的「邪焰之翼」，則這個特性無法使用。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "オーラバーン",
				'zh-tw': "氣場烈焰",
			},
			damage: 190,
			cost: ["Darkness", "Darkness", "Colorless"],
			effect: {
				ja: "このポケモンにも30ダメージ。",
				'zh-tw': "這隻寶可夢也受到30點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 586612,
				tcgplayer: 571349,
			},
		},
	],

	retreat: 2,
	regulationMark: "E",
	rarity: "Double rare",
	dexId: [146],
};

export default card;
