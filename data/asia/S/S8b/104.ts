import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "ガラル ジグザグマ",
		'zh-tw': "伽勒爾 蛇紋熊",
	},

	illustrator: "kirisAki",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		ja: "この姿が いちばん 古い ジグザグマの 姿 らしい。 ジグザグ動いて あたりを 荒らす。",
		'zh-tw': "這似乎是蛇紋熊最古老的樣子。會之字形亂走，把周圍弄得一團糟。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "かんしゃくヘッド",
				'zh-tw': "煩躁頭擊",
			},
			effect: {
				ja: "自分の番に、このカードを手札からベンチに出したとき、1回使える。相手のポケモン1匹に、ダメカンを1個のせる。",
				'zh-tw': "在自己的回合，當從手牌將這張卡放置於備戰區時，可使用1次。在對手的1隻寶可夢身上放置1個傷害指示物。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "ふいをつく",
				'zh-tw': "偷襲",
			},
			damage: 30,
			cost: ["Darkness", "Colorless"],
			effect: {
				ja: "コインを1回投げウラなら、このワザは失敗。",
				'zh-tw': "擲1次硬幣若為反面，則這個招式失敗。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 586620,
				tcgplayer: 571357,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 578403,
			},
		},
	],

	retreat: 1,
	regulationMark: "D",
	rarity: "None",
	dexId: [263],
};

export default card;
