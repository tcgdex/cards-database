import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "デデンネ",
		'zh-tw': "金屬怪",
	},

	illustrator: "Yuu Nishida",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "上の ヒゲは 辺りを 探る センサーで 下に 生えた ヒゲは 電気を 放つ 器官 なのだ。",
		'zh-tw': "由２隻鐵啞鈴以磁力結合而成。因為有２個大腦， 精神力量也強化成２倍了。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "マッドパーティ",
				'zh-tw': "子彈拳",
			},
			damage: "20×",
			cost: ["Psychic", "Colorless", "Colorless"],
			effect: {
				ja: "自分のトラッシュにある、ワザ「マッドパーティ」を持つポケモンの数×20ダメージ。",
				'zh-tw': "擲2次硬幣，增加正面出現的次數×30點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561787,
				tcgplayer: 597390,
			},
		},
	],

	retreat: 1,
	regulationMark: "D",
	rarity: "Promo",
	dexId: [702],
};

export default card;
