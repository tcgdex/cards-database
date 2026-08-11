import { Card } from "models/database/card";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "イーブイ",
		'zh-tw': "電肚蛙",
	},

	illustrator: "saino misaki",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		'ja-jp': "環境の 変化に すぐさま 合わせられるよう いくつもの 進化の 可能性を 秘めている。",
		'zh-tw': "只要伸縮肥嘟嘟的身體，就能讓肚子上的發電臍產生大量的電氣。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'ja-jp': "なかまをよぶ",
				'zh-tw': "電磁波",
			},
			cost: ["Colorless"],
			effect: {
				'ja-jp': "自分の山札からたねポケモンを1枚選び、ベンチに出す。そして山札を切る。",
				'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。",
			},
		},
		{
			name: {
				'ja-jp': "たいあたり",
				'zh-tw': "雙峰伏特",
			},
			damage: 30,
			cost: ["Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 587789,
			},
		},
	],

	retreat: 1,
	regulationMark: "G",
	rarity: "Promo",
	dexId: [133],
};

export default card;
