import { Card } from "../../../interfaces";
import Set from "../SM12a";

const card: Card = {
	set: Set,
	name: {
		ja: "ゾロアーク",
	},

	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	hp: 110,
	types: ["Darkness"],

	description: {
		ja: "相手を 化かす ことで 群れの 安全を 守ってきた ポケモン。 仲間同士の 結束が 固い。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ちょうはつ" },
			cost: ["Darkness"],
			effect: {
				ja: "相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。",
			},
		},
		{
			name: { ja: "ナイトパニッシュ" },
			damage: "20×",
			cost: ["Darkness", "Colorless", "Colorless"],
			effect: {
				ja: "自分のトラッシュにあるポケモンの枚数x20ダメージ。与えられるダメージはポケモン10枚ぶんまで。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 544021,
			},
		},
	],

	evolveFrom: {
		ja: "ゾロア",
	},

	retreat: 2,
	regulationMark: "B",
	rarity: "None",
	dexId: [571],
};

export default card;
