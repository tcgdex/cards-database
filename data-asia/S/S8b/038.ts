import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "インテレオン",
		'zh-tw': "千面避役",
	},

	illustrator: "AKIRA EGAWA",
	category: "Pokemon",
	hp: 150,
	types: ["Water"],

	description: {
		ja: "指先から 放つ 水鉄砲は マッハ３の 速さ。 瞬膜で 急所を 見抜いて 撃ちぬくぞ。",
		'zh-tw': "能從指尖射出速度高達３馬赫的水槍。牠的瞬膜能幫助牠看穿 敵人的弱點，準確地擊中要害。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "クイックシューター",
				'zh-tw': "快速射擊手",
			},
			effect: {
				ja: "自分の番に1回使える。相手のポケモン1匹に、ダメカンを2個のせる。",
				'zh-tw': "在自己的回合時，可使用1次。在對手的1隻寶可夢身上放置2個傷害指示物。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "たきのぼり",
				'zh-tw': "攀瀑",
			},
			damage: 70,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 586554,
				tcgplayer: 571291,
			},
		},
	],

	evolveFrom: {
		ja: "ジメレオン",
	},

	retreat: 1,
	regulationMark: "E",
	rarity: "None",
	dexId: [818],
};

export default card;
