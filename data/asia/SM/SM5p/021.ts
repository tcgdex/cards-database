import { Card } from "models/database/card";
import Set from "../SM5p";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ネクロズマ あかつきのつばさ",
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],

	description: {
		'ja-jp': "ルナアーラに 最早 意思は ない。 ネクロズマに 支配され すべての エネルギーを 放出 し続ける。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ガルフストリーム" },
			damage: "20+",
			cost: ["Psychic"],
			effect: {
				'ja-jp': "自分のサイドの残り枚数が6枚なら、このポケモンにのっているダメカンの数x20ダメージ追加。",
			},
		},
		{
			name: { ja: "あかつきのやいば" },
			damage: 130,
			cost: ["Psychic", "Psychic", "Psychic"],
			effect: {
				'ja-jp': "このポケモンについているエネルギーを、2個トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559771,
			},
		},
	],

	retreat: 2,
	rarity: "None",
	dexId: [800],
};

export default card;
