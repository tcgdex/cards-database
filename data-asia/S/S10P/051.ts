import { Card } from "../../../interfaces";
import Set from "../S10P";

const card: Card = {
	set: Set,
	name: {
		ja: "レジドラゴ",
		'zh-tw': "雷吉鐸拉戈",
	},

	illustrator: "DOM",
	category: "Pokemon",
	hp: 130,
	types: ["Dragon"],

	description: {
		ja: "腕の 形は 古代の ドラゴン ポケモンの 頭という 学説も あるが 証明されていない。",
		'zh-tw': "有學者認為牠的手臂是古代龍寶可夢頭部的形狀。 但這個學說尚未被證實。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "りゅうのひほう",
				'zh-tw': "龍之護庇",
			},
			effect: {
				ja: "このポケモンがバトル場にいるなら、自分の番に1回使える。自分の手札が4枚になるように、山札を引く。この番、すでに別の「りゅうのひほう」を使っていたなら、この特性は使えない。",
				'zh-tw': "若這隻寶可夢在戰鬥場上，則在自己的回合時可使用1次。從牌庫抽卡直到自己的手牌滿4張為止。在這個回合，若已經使出了其他的「龍之護庇」，則這個特性無法使用。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "きょだいなキバ",
				'zh-tw': "巨大之牙",
			},
			damage: 160,
			cost: ["Grass", "Fire", "Colorless"],
		},
	],

	weaknesses: [],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 651110,
				tcgplayer: 569894,
			},
		},
	],

	retreat: 3,
	regulationMark: "F",
	rarity: "Uncommon",
	dexId: [895],
};

export default card;
