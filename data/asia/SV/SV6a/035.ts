import { Card } from "models/database/card";
import Set from "../SV6a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "イベルタル",
		'zh-tw': "伊裴爾塔爾",
	},

	illustrator: "SIE NANAHARA",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],

	description: {
		'ja-jp': "翼と 尾羽を 広げて 赤く 輝くとき 生き物の 命を 吸い取る 伝説の ポケモン。",
		'zh-tw': "傳說的寶可夢。據說當牠 展開的翅膀與尾羽閃耀紅色光芒時， 就會吸走生物的生命。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'ja-jp': "むしばむかぜ",
				'zh-tw': "侵蝕之風",
			},
			cost: ["Darkness"],
			effect: {
				'ja-jp': "ダメカンがのっている相手のポケモン全員に、それぞれダメカンを2個のせる。",
				'zh-tw': "在對手的身上放置有傷害指示物的所有寶可夢身上，各放置2個傷害指示物。",
			},
		},
		{
			name: {
				'ja-jp': "はかいビーム",
				'zh-tw': "破壞光束",
			},
			damage: 100,
			cost: ["Darkness", "Darkness", "Colorless"],
			effect: {
				'ja-jp': "コインを1回投げオモテなら、相手のバトルポケモンについているエネルギーを1個選び、トラッシュする。",
				'zh-tw': "擲1次硬幣若為正面，則選擇1個對手的戰鬥寶可夢身上附加的能量，將其丟棄。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 773784,
				tcgplayer: 566286,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "Uncommon",
	dexId: [717],
};

export default card;
