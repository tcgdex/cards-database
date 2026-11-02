import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		ja: "アローラ ナッシー",
	},

	illustrator: "Oswaldo KATO",
	category: "Pokemon",
	hp: 150,
	types: ["Grass"],

	description: {
		ja: "伸び伸び 育って サイコパワーは いらなくなり 眠れる ドラゴンの 力が 覚醒 したのだ。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "スケールアップ" },
			effect: {
				ja: "このポケモンに[G]エネルギーが6個以上ついているなら、このポケモンは最大HPが「＋250」される。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "メガドレイン" },
			damage: 150,
			cost: ["Grass", "Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンのHPを「50」回復する。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 908180,
			},
		},
	],

	evolveFrom: {
		ja: "タマタマ",
	},

	retreat: 4,
	regulationMark: "J",
	rarity: "None",
	dexId: [103],
};

export default card;
