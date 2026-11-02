import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "ハピナスV",
		'zh-tw': "幸福蛋V",
	},

	illustrator: "Saki Hayashiro",
	category: "Pokemon",
	hp: 250,
	types: ["Colorless"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "しぜんかいふく" },
			effect: {
				ja: "自分の手札からこのポケモンにエネルギーをつけるたび、このポケモンの特殊状態をすべて回復する。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "ハッピーボンバー",
				'zh-tw': "自然回復",
			},
			damage: "10+",
			cost: ["Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーの数×30ダメージ追加。のぞむなら、ダメージを与えたあとに、トラッシュからエネルギーを3枚まで選び、このポケモンにつける。",
				'zh-tw': "每次從自己的手牌將能量附於這隻寶可夢身上時，都將這隻寶可夢的特殊狀態全部恢復。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 586643,
				tcgplayer: 571380,
			},
		},
	],

	retreat: 4,
	regulationMark: "E",
	rarity: "Double rare",
	dexId: [242],
};

export default card;
