import { Card } from "../../../interfaces";
import Set from "../S11";

const card: Card = {
	set: Set,
	name: {
		ja: "ワルビル",
		'zh-tw': "混混鱷",
	},

	illustrator: "Pani Kobayashi",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],

	description: {
		ja: "暗闇でも 見える 特殊な 両目の おかげで 真夜中でも 迷わず 狩りが できるのだ。",
		'zh-tw': "有一雙在漆黑環境也能看見四周的特殊眼睛，讓牠即使 在半夜也能不受影響地去打獵。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "かみくだく",
				'zh-tw': "咬碎",
			},
			damage: 60,
			cost: ["Darkness", "Colorless", "Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンについているエネルギーを1個選び、トラッシュする。",
				'zh-tw': "擲1次硬幣若為正面，則選擇1個對手的戰鬥寶可夢身上附加的能量，將其丟棄。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 667944,
				tcgplayer: 570000,
			},
		},
	],

	evolveFrom: {
		ja: "メグロコ",
	},

	retreat: 3,
	regulationMark: "F",
	rarity: "Uncommon",
	dexId: [552],
};

export default card;
