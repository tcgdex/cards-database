import { Card } from "../../../interfaces";
import Set from "../SV10";

const card: Card = {
	set: Set,
	name: {
		ja: "ハルクジラex",
		'zh-tw': "浩大鯨ex",
		'zh-cn': "浩大鯨ex",
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 300,
	types: ["Water"],

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "ゆきにまぎれる",
				'zh-tw': "融合為雪",
				'zh-cn': "融合為雪",
			},
			effect: {
				ja: "このポケモンは、相手が手札からグッズまたはサポートを出して使ったとき、その効果を受けない。",
				'zh-tw': "對手從手牌使出物品卡或者支援者卡時，這隻寶可夢不會受到那個效果的影響。",
				'zh-cn': "對手從手牌使出物品卡或者支援者卡時，這隻寶可夢不會受到那個效果的影響。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "クラッシュプレス",
				'zh-tw': "粉碎重壓",
				'zh-cn': "粉碎重壓",
			},
			damage: "140+",
			cost: ["Water", "Water", "Water", "Colorless"],
			effect: {
				ja: "のぞむなら、場に出ているスタジアムをトラッシュする。その場合、140ダメージ追加。",
				'zh-tw': "若希望，將場上的競技場卡丟棄。這個情況下，增加140點傷害。",
				'zh-cn': "若希望，將場上的競技場卡丟棄。這個情況下，增加140點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 821864,
				tcgplayer: 628673,
			},
		},
	],

	evolveFrom: {
		ja: "アルクジラ",
	},

	retreat: 4,
	regulationMark: "I",
	rarity: "Double rare",
	dexId: [975],

	suffix: "EX",
};

export default card;
