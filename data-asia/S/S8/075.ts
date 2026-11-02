import { Card } from "../../../interfaces";
import Set from "../S8";

const card: Card = {
	set: Set,
	name: {
		ja: "ラティオス",
		'zh-tw': "拉帝歐斯",
	},

	illustrator: "hatachu",
	category: "Pokemon",
	hp: 130,
	types: ["Dragon"],

	description: {
		ja: "高い 知能を 持ち 人間の 言葉を 理解する。 争いを 嫌う 優しい ポケモンだ。",
		'zh-tw': "擁有很高的智慧，能理解人類的語言。是厭惡爭鬥的溫柔寶可夢。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "ブルーアシスト",
				'zh-tw': "藍色支援",
			},
			effect: {
				ja: "自分の番に1回使える。自分の手札から[超]エネルギーを1枚選び、自分の「ラティアス」につける。",
				'zh-tw': "在自己的回合時，可使用1次。從自己的手牌選擇1張【超】能量卡，附於自己的「拉帝亞斯」身上。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "ラスターパージ",
				'zh-tw': "潔淨光芒",
			},
			damage: 210,
			cost: ["Water", "Water", "Psychic", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーを2個選び、トラッシュする。",
				'zh-tw': "選擇2個這隻寶可夢身上附加的能量，將其丟棄。",
			},
		},
	],

	weaknesses: [],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 575630,
				tcgplayer: 569576,
			},
		},
	],

	retreat: 2,
	regulationMark: "E",
	rarity: "Rare",
	dexId: [381],
};

export default card;
