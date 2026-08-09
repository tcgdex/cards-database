import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "ドータクン",
		'zh-tw': "青銅鐘",
	},

	illustrator: "Atsushi Furusawa",
	category: "Pokemon",
	hp: 110,
	types: ["Metal"],

	description: {
		ja: "体の模様 から 本来 ガラルには いない ポケモンと 考える 学者も 多い。",
		'zh-tw': "牠身上的紋路讓許多學者認為牠原本並不存在於伽勒爾。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "メタルトランス",
				'zh-tw': "金屬轉移",
			},
			effect: {
				ja: "自分の番に何回でも使える。自分の場のポケモンについている[鋼]エネルギーを1個選び、自分の別のポケモンにつけ替える。",
				'zh-tw': "在自己的回合時，可不限次數使用。選擇1個自己的場上寶可夢身上附加的【鋼】能量，改附於自己的其他寶可夢身上。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "しねんのずつき",
				'zh-tw': "意念頭錘",
			},
			damage: 70,
			cost: ["Metal", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 586629,
				tcgplayer: 571366,
			},
		},
	],

	evolveFrom: {
		ja: "ドーミラー",
	},

	retreat: 3,
	regulationMark: "E",
	rarity: "None",
	dexId: [437],
};

export default card;
