import { Card } from "models/database/card";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "イオルブVMAX",
		'zh-tw': "以歐路普VMAX",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 310,
	types: ["Grass"],

	stage: "VMAX",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "かいこうせん",
				'zh-tw': "怪光線",
			},
			effect: {
				'ja-jp': "このポケモンがバトル場にいるなら、自分の番に1回使える。相手のポケモン全員に、それぞれダメカンを1個のせる。",
				'zh-tw': "若這隻寶可夢在戰鬥場上，則在自己的回合時可使用1次。在對手的所有寶可夢身上各放置1個傷害指示物。",
			},
		},
	],

	attacks: [
		{
			name: {
				'ja-jp': "キョダイウェーブ",
				'zh-tw': "超極巨波瀾壯闊",
			},
			damage: "50+",
			cost: ["Grass", "Colorless"],
			effect: {
				'ja-jp': "相手のバトルポケモンについているエネルギーの数×50ダメージ追加。",
				'zh-tw': "增加對手的戰鬥寶可夢身上附加的能量的數量×50點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 586526,
				tcgplayer: 571264,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "イオルブV",
	},

	retreat: 1,
	regulationMark: "D",
	rarity: "Triple Rare",
	dexId: [826],
};

export default card;
