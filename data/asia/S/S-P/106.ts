import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ココ",
		'zh-tw': "鰓魚龍V",
	},

	illustrator: "Tetsuo Yajima",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	description: {
		ja: "ザルードに 育てられた 少年。 ジャングルの ポケモン達から 慕われている。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "もりのよびごえ",
				'zh-tw': "咬咬粉碎",
			},
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札から[草]ポケモンを1枚選び、相手に見せて、手札に加える。そして山札を切る。",
				'zh-tw': "在造成傷害前，將對手的戰鬥寶可夢身上附加的「寶可夢道具」丟棄。有丟棄的情況下，增加120點傷害。",
			},
		},
		{
			name: {
				ja: "ターザンキック",
				'zh-tw': "龍之強襲",
			},
			damage: 120,
			cost: ["Grass", "Grass", "Colorless"],
			effect: {
				ja: "コインを1回投げ、ウラなら失敗。",
				'zh-tw': "在下個自己的回合，這隻寶可夢無法使用「龍之強襲」。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 597307,
			},
		},
	],

	retreat: 1,
	regulationMark: "D",
	rarity: "Promo",
};

export default card;
