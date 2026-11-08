import { Card } from "models/database/card";
import Set from "../SM9";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ニドキング",
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 160,
	types: ["Psychic"],

	description: {
		'ja-jp': "石のように 硬い 皮膚と 長く 伸びた ツノが 特徴。 ツノには 毒も あるので 注意。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "ひきずりだす" },
			cost: ["Colorless", "Colorless"],
			effect: {
				'ja-jp': "相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。その後、新しく出てきたポケモンに50ダメージ。",
			},
		},
		{
			name: { ja: "キングドラム" },
			damage: "100+",
			cost: ["Psychic", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "自分のベンチに「ニドクイン」がいるなら、100ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558346,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ニドリーノ",
	},

	retreat: 3,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [34],
};

export default card;
