import { Card } from "../../../interfaces";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ダストダス",
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 100,
	types: ["Psychic"],

	description: {
		ja: "左腕で 相手を 絞めつけて 口から 吐き出す 悪臭の 毒ガスで とどめを 刺すのだ。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ダストオキシン" },
			effect: {
				ja: "このポケモンに「ポケモンのどうぐ」がついているなら、おたがいの場・手札・トラッシュのカードに書かれている特性（「ダストオキシン」をのぞく）は、すべてなくなる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ヘドロなげ" },
			damage: 60,
			cost: ["Psychic", "Psychic", "Colorless"],
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 749913,
				tcgplayer: 587881,
			},
		},
	],

	evolveFrom: {
		ja: "ヤブクロン",
	},

	retreat: 3,
	rarity: "Promo",
	dexId: [659],
};

export default card;
