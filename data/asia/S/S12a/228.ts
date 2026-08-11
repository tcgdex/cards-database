import { Card } from "../../../interfaces";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		ja: "ダークライVSTAR",
		'zh-tw': "達克萊伊VSTAR",
	},

	illustrator: "Pani Kobayashi",
	category: "Pokemon",
	hp: 270,
	types: ["Darkness"],

	stage: "VSTAR",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "スターアビス",
				'zh-tw': "星星深淵",
			},
			effect: {
				ja: "自分の番に使える。自分のトラッシュからグッズを2枚まで選び、相手に見せて、手札に加える。［対戦中、自分はVSTARパワーを1回しか使えない。］",
				'zh-tw': "在自己的回合時可使用。從自己的棄牌區選擇最多2張物品卡，在給對手看過後加入手牌。[對戰中，己方只可使用1次【VSTAR】力量。]",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "あくのはどう",
				'zh-tw': "惡之波動",
			},
			damage: "30+",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "自分の場のポケモンについている[D]エネルギーの数×30ダメージ追加。",
				'zh-tw': "增加自己的場上寶可夢身上附加的【惡】能量的數量×30點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 687790,
				tcgplayer: 571766,
			},
		},
	],

	evolveFrom: {
		ja: "ダークライV",
	},

	retreat: 2,
	regulationMark: "F",
	rarity: "Special illustration rare",
	dexId: [491],
};

export default card;
