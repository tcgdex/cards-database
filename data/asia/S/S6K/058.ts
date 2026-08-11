import { Card } from "../../../interfaces";
import Set from "../S6K";

const card: Card = {
	set: Set,
	name: {
		ja: "ホシガリス",
		'zh-tw': "貪心栗鼠",
	},

	illustrator: "OKACHEKE",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		ja: "つねに 木の実を 食っているので 見かけ以上に タフ。 木の実を 狙って 畑に 現れる。",
		'zh-tw': "由於牠無論何時都在吃樹果，使得牠比外表看起來還要頑強。會出現在田地裡尋找樹果。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ひろいぐい",
				'zh-tw': "撿起來吃",
			},
			cost: ["Colorless"],
			effect: {
				ja: "自分のトラッシュから「ポケモンのどうぐ」を1枚選び、相手に見せて、手札に加える。",
				'zh-tw': "從自己的棄牌區選擇1張「寶可夢道具」卡，在給對手看過後加入手牌。",
			},
		},
		{
			name: {
				ja: "かじる",
				'zh-tw': "咬",
			},
			damage: 10,
			cost: ["Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560846,
				tcgplayer: 569286,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "Common",
	dexId: [819],
};

export default card;
