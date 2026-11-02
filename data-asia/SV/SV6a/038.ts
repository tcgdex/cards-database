import { Card } from "../../../interfaces";
import Set from "../SV6a";

const card: Card = {
	set: Set,
	name: {
		ja: "キチキギスex",
		'zh-tw': "吉雉雞ex",
	},

	illustrator: "takuyoa",
	category: "Pokemon",
	hp: 210,
	types: ["Darkness"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "さかてにとる" },
			effect: {
				ja: "前の相手の番に、自分のポケモンがきぜつしていたなら、自分の番に1回使える。自分の山札を3枚引く。この番、すでに別の「さかてにとる」を使っていたなら、この特性は使えない。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "クルーエルアロー",
				'zh-tw': "‌‌[特性]扭轉乾坤",
			},
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "相手のポケモン1匹に、100ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
				'zh-tw': "在上個對手的回合，若自己的寶可夢【昏厥】了，則在自己的回合時可使用1次。從自己的牌庫抽出3張卡。在這個回合，若已經使出了其他的「扭轉乾坤」，則這個特性無法使用。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 773787,
				tcgplayer: 566289,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "Double rare",
	dexId: [1016],

	suffix: "EX",
};

export default card;
