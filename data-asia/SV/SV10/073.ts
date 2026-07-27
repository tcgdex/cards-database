import { Card } from "../../../interfaces";
import Set from "../SV10";

const card: Card = {
	set: Set,
	name: {
		ja: "フォレトス",
		'zh-tw': "佛烈托斯",
		'zh-cn': "佛烈托斯",
	},

	illustrator: "Wintr Wandr",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],

	description: {
		ja: "太い 木の幹に くっついている。 なにかの 気配を 感じるたび 殻の 破片を 撃ち出すのだ。",
		'zh-tw': "總是貼著在粗大的樹幹上。 一旦察覺到了什麼， 就會射出外殼的碎片。",
		'zh-cn': "總是貼著在粗大的樹幹上。 一旦察覺到了什麼， 就會射出外殼的碎片。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "アイアンシェイク",
				'zh-tw': "鐵之震動",
				'zh-cn': "鐵之震動",
			},
			damage: 20,
			cost: ["Colorless"],
			effect: {
				ja: "自分の場のポケモンについている[M]エネルギーを好きなだけ選び、自分のポケモンに好きなようにつけ替える。",
				'zh-tw': "選擇自己的場上寶可夢身上附加的任意數量的【鋼】能量卡，以任意方式改附於自己的寶可夢身上。",
				'zh-cn': "選擇自己的場上寶可夢身上附加的任意數量的【鋼】能量卡，以任意方式改附於自己的寶可夢身上。",
			},
		},
		{
			name: {
				ja: "ハリケーンニードル",
				'zh-tw': "颶風尖刺",
				'zh-cn': "颶風尖刺",
			},
			damage: "80×",
			cost: ["Metal", "Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "コインを4回投げ、オモテの数×80ダメージ。",
				'zh-tw': "擲4次硬幣，造成正面出現的次數×80點傷害。",
				'zh-cn': "擲4次硬幣，造成正面出現的次數×80點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 821905,
				tcgplayer: 628714,
			},
		},
	],

	evolveFrom: {
		ja: "クヌギダマ",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [205],
};

export default card;
