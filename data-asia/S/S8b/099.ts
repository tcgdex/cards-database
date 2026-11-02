import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "クロバットV",
		'zh-tw': "叉字蝠V",
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 180,
	types: ["Darkness"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "ナイトアセット",
				'zh-tw': "暗夜能源",
			},
			effect: {
				ja: "自分の番に、このカードを手札からベンチに出したとき、1回使える。自分の手札が6枚になるように、山札を引く。この番、すでに別の「ナイトアセット」を使っていたなら、この特性は使えない。",
				'zh-tw': "在自己的回合，當從手牌將這張卡放置於備戰區時，可使用1次。從牌庫抽卡直到自己的手牌滿6張為止。在這個回合，若已經使出了其他的「暗夜能源」，則這個特性無法使用。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "どくのキバ",
				'zh-tw': "毒牙",
			},
			damage: 70,
			cost: ["Darkness", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをどくにする。",
				'zh-tw': "將對手的戰鬥寶可夢【中毒】。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 586615,
				tcgplayer: 571352,
			},
		},
	],

	retreat: 1,
	regulationMark: "D",
	rarity: "Double rare",
	dexId: [169],
};

export default card;
