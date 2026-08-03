import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "シャワーズ",
		'zh-tw': "嘟嘟利V",
	},

	illustrator: "so-taro",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	description: {
		ja: "シャワーズの 全身の ひれが 小刻みに 震えはじめるのは 数時間後に 雨が降る しるし。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "みずがくれ" },
			effect: {
				ja: "このポケモンは、ベンチにいるかぎり、ワザのダメージを受けない。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "ハイドロポンプ",
				'zh-tw': "接二連三",
			},
			damage: "60+",
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンについている[水]エネルギーの数×20ダメージ追加。",
				'zh-tw': "在下個自己的回合，這隻寶可夢使用的招式，對對手的戰鬥寶可夢造成的傷害「+80」點。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 525085,
				tcgplayer: 597282,
			},
		},
	],

	evolveFrom: {
		ja: "イーブイ",
	},

	retreat: 2,
	regulationMark: "D",
	rarity: "Promo",
	dexId: [134],
};

export default card;
