import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "ガラル タチフサグマ",
		'zh-tw': "伽勒爾 堵攔熊",
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 160,
	types: ["Darkness"],

	description: {
		ja: "ケンカを 繰り返し 進化。 腕をクロスし 叫ぶ 雄叫びは どんな 相手も 怯ませるぞ。",
		'zh-tw': "在不斷的鬥爭中得到了進化。牠交叉著雙臂發出的怒吼能讓一切對手都為之膽怯。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "あらくれシャウト",
				'zh-tw': "暴躁嚎叫",
			},
			effect: {
				ja: "自分の番に、このカードを手札から出して進化させたとき、1回使える。相手のポケモン1匹に、ダメカンを3個のせる。",
				'zh-tw': "在自己的回合，當從手牌使出這張卡並完成進化時，可使用1次。在對手的1隻寶可夢身上放置3個傷害指示物。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "ブロッキング",
				'zh-tw': "攔堵",
			},
			damage: 90,
			cost: ["Darkness", "Colorless"],
			effect: {
				ja: "次の相手の番、このポケモンはたねポケモンからワザのダメージを受けない。",
				'zh-tw': "在下個對手的回合，這隻寶可夢不會受到【基礎】寶可夢招式的傷害。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 586622,
				tcgplayer: 571359,
			},
		},
	],

	evolveFrom: {
		ja: "ガラル マッスグマ",
	},

	retreat: 2,
	regulationMark: "D",
	rarity: "None",
	dexId: [862],
};

export default card;
