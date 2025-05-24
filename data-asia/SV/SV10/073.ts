import { Card } from "../../../interfaces"
import Set from "../SV10"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "佛烈托斯",
		'zh-cn': "佛烈托斯",
		ja: "フォレトス"
	},

	illustrator: "Wintr Wandr",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],

	description: {
		'zh-tw': "總是貼著在粗大的樹幹上。 一旦察覺到了什麼， 就會射出外殼的碎片。",
		'zh-cn': "總是貼著在粗大的樹幹上。 一旦察覺到了什麼， 就會射出外殼的碎片。",
		ja: "太い 木の幹に くっついている。 なにかの 気配を 感じるたび 殻の 破片を 撃ち出すのだ。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "鐵之震動",
			'zh-cn': "鐵之震動",
			ja: "アイアンシェイク"
		},

		effect: {
			'zh-tw': "選擇自己的場上寶可夢身上附加的任意數量的【鋼】能量卡，以任意方式改附於自己的寶可夢身上。",
			'zh-cn': "選擇自己的場上寶可夢身上附加的任意數量的【鋼】能量卡，以任意方式改附於自己的寶可夢身上。",
			ja: "自分の場のポケモンについているエネルギーを好きなだけ選び、自分のポケモンに好きなようにつけ替える。"
		},

		damage: 20,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "颶風尖刺",
			'zh-cn': "颶風尖刺",
			ja: "ハリケーンニードル"
		},

		effect: {
			'zh-tw': "擲4次硬幣，造成正面出現的次數×80點傷害。",
			'zh-cn': "擲4次硬幣，造成正面出現的次數×80點傷害。",
			ja: "コインを4回投げ、オモテの数×80ダメージ。"
		},

		damage: "80×",
		cost: ["Metal", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "－30"
	}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [205]
}

export default card