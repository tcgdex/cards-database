import { Card } from "../../../interfaces";
import Set from "../S11";

const card: Card = {
	set: Set,
	name: {
		ja: "イシヘンジン",
		'zh-tw': "巨石丁",
	},

	illustrator: "HYOGONOSUKE",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],

	description: {
		ja: "大草原の 中で たたずみ 陽の 傾きを 眺めて 暮らす。 ダイナミックな 蹴り技が 得意。",
		'zh-tw': "佇立在大草原上，每天眺望著日升日落。 擅長強而有力的踢技。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "パワーストーン",
				'zh-tw': "力量尖石",
			},
			cost: ["Colorless"],
			effect: {
				ja: "自分の手札から[F]エネルギーを2枚まで選び、自分のポケモンに好きなようにつける。",
				'zh-tw': "從自己的手牌選擇最多2張【鬥】能量卡，以任意方式附於自己的寶可夢身上。",
			},
		},
		{
			name: {
				ja: "ロストシュート",
				'zh-tw': "放逐射擊",
			},
			damage: 120,
			cost: ["Fighting", "Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "相手の山札を上から1枚、ロストゾーンに置く。",
				'zh-tw': "將對手的牌庫上方1張卡放置於放逐區。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 667940,
				tcgplayer: 569996,
			},
		},
	],

	retreat: 4,
	regulationMark: "F",
	rarity: "Uncommon",
	dexId: [874],
};

export default card;
