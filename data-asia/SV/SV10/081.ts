import { Card } from "../../../interfaces";
import Set from "../SV10";

const card: Card = {
	set: Set,
	name: {
		ja: "ロケット団のポリゴン",
		'zh-tw': "<火箭隊的>多邊獸",
		'zh-cn': "<火箭隊的>多邊獸",
	},

	illustrator: "Oswaldo KATO",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		ja: "呼吸を していないので どんなところでも 活躍できると 期待される 人工の ポケモン。",
		'zh-tw': "人工創造的寶可夢。 沒有呼吸，因此被期待在 任何地方都能大展身手。",
		'zh-cn': "人工創造的寶可夢。 沒有呼吸，因此被期待在 任何地方都能大展身手。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ハッキング",
				'zh-tw': "駭客攻擊",
				'zh-cn': "駭客攻擊",
			},
			cost: ["Colorless"],
			effect: {
				ja: "自分の手札を1枚選び、トラッシュする。その後、相手は相手自身の手札を1枚選び、トラッシュする。",
				'zh-tw': "選擇1張自己的手牌，將其丟棄。然後，對手選擇1張對手自己的手牌，將其丟棄。",
				'zh-cn': "選擇1張自己的手牌，將其丟棄。然後，對手選擇1張對手自己的手牌，將其丟棄。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 821913,
				tcgplayer: 628722,
			},
		},
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [137],
};

export default card;
