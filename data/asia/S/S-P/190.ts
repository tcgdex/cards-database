import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ポットデス",
		'zh-tw': "麻麻鰻",
	},

	illustrator: "Misa Tsutsui",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		ja: "アンティークの ポットに 棲みつく。 ほとんどが 贋作だが ごくまれに 真作が 見つかる ことも。",
		'zh-tw': "食慾旺盛的寶可夢。一發現獵物就會發動襲擊， 用電流使其麻痺後大快朵頤。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "ティーブレイク",
				'zh-tw': "臨場衝擊",
			},
			effect: {
				ja: "自分の番に、自分の手札からワザ「マッドパーティ」を持つポケモンを1枚トラッシュするなら、1回使える。自分の山札を2枚引く。",
				'zh-tw': "在自己的回合，當從手牌使出這張卡並完成進化時，可使用1次。擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "マッドパーティ",
				'zh-tw': "劈哩啪啦",
			},
			damage: "20×",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "自分のトラッシュにある、ワザ「マッドパーティ」を持つポケモンの数×20ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561785,
				tcgplayer: 597388,
			},
		},
	],

	evolveFrom: {
		ja: "ヤバチャ",
	},

	retreat: 1,
	regulationMark: "D",
	rarity: "Promo",
	dexId: [855],
};

export default card;
