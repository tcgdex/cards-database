import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "チェリム",
		'zh-tw': "櫻花兒",
	},

	illustrator: "Tika Matsuno",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	description: {
		ja: "満開の 花びら から ただよう かすかな 香りが 虫ポケモンを 集める。",
		'zh-tw': "盛開的花瓣中散發出的微微香氣會吸引蟲寶可夢聚集而來。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "はるらんまん",
				'zh-tw': "春爛漫",
			},
			effect: {
				ja: "自分の番に何回でも使える。自分の手札から[草]エネルギーを1枚選び、自分のポケモン（「ルールを持つポケモン」をのぞく）につける。",
				'zh-tw': "在自己的回合時，可不限次數使用。從自己的手牌選擇1張【草】能量卡，附於自己的寶可夢（「擁有規則的寶可夢」除外）身上。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "タネばくだん",
				'zh-tw': "種子炸彈",
			},
			damage: 70,
			cost: ["Grass", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 586521,
				tcgplayer: 571259,
			},
		},
	],

	evolveFrom: {
		ja: "チェリンボ",
	},

	retreat: 2,
	regulationMark: "E",
	rarity: "None",
	dexId: [421],
};

export default card;
