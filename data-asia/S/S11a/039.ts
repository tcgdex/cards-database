import { Card } from "../../../interfaces";
import Set from "../S11a";

const card: Card = {
	set: Set,
	name: {
		ja: "クチートV",
		'zh-tw': "大嘴娃V",
	},

	illustrator: "takuyoa",
	category: "Pokemon",
	hp: 200,
	types: ["Psychic"],

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ふきげんスラップ",
				'zh-tw': "不爽摑擊",
			},
			damage: 30,
			cost: ["Psychic"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンについているエネルギーを1個選び、トラッシュする。",
				'zh-tw': "擲1次硬幣若為正面，則選擇1個對手的戰鬥寶可夢身上附加的能量，將其丟棄。",
			},
		},
		{
			name: {
				ja: "かみおとす",
				'zh-tw': "咬落",
			},
			damage: 100,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "相手の手札からオモテを見ないで1枚選び、トラッシュする。",
				'zh-tw': "在不看正面的情況下，選擇1張對手的手牌，將其丟棄。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 673037,
				tcgplayer: 570802,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Double rare",
	dexId: [303],
};

export default card;
