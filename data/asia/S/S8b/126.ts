import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "カビゴン",
		'zh-tw': "卡比獸",
	},

	illustrator: "Narumi Sato",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],

	description: {
		ja: "１日に 食べ物を ４００キロ 食べないと 気がすまない。 食べ終わると 眠ってしまう。",
		'zh-tw': "每天不吃下４００公斤的食物絕不會善罷甘休。吃飽了就會開始睡覺。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "くいだめ",
				'zh-tw': "積食",
			},
			effect: {
				ja: "このポケモンがバトル場にいるなら、自分の番に1回使えて、使ったなら、自分の番は終わる。自分の手札が7枚になるように、山札を引く。",
				'zh-tw': "若這隻寶可夢在戰鬥場上，則在自己的回合時可使用1次，若使用，則自己的回合結束。從牌庫抽卡直到自己的手牌滿7張為止。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "のしかかり",
				'zh-tw': "泰山壓頂",
			},
			damage: 100,
			cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
				'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 586642,
				tcgplayer: 571379,
			},
		},
	],

	retreat: 3,
	regulationMark: "D",
	rarity: "None",
	dexId: [143],
};

export default card;
