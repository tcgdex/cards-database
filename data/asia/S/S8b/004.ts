import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "コロトックV",
		'zh-tw': "音箱蟀V",
	},

	illustrator: "Satoshi Shirai",
	category: "Pokemon",
	hp: 180,
	types: ["Grass"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "エキサイトステージ",
				'zh-tw': "激動舞台",
			},
			effect: {
				ja: "自分の番に1回使える。自分の手札が3枚になるように、山札を引く。このポケモンがバトル場にいるなら、4枚になるように引く。この番、すでに別の「エキサイトステージ」を使っていたなら、この特性は使えない。",
				'zh-tw': "在自己的回合時，可使用1次。從牌庫抽卡直到自己的手牌滿3張為止。若這隻寶可夢在戰鬥場上，則抽卡直到滿4張為止。在這個回合，若已經使出了其他的「激動舞台」，則這個特性無法使用。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "シザークロス",
				'zh-tw': "十字剪",
			},
			damage: "80+",
			cost: ["Grass", "Colorless", "Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、80ダメージ追加。",
				'zh-tw': "擲1次硬幣若為正面，則增加80點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 586519,
				tcgplayer: 571257,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "Double rare",
	dexId: [402],
};

export default card;
