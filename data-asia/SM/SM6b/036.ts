import { Card } from "../../../interfaces";
import Set from "../SM6b";

const card: Card = {
	set: Set,
	name: {
		ja: "サナギラス",
	},

	illustrator: "Hironobu Yoshida",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],

	description: {
		ja: "岩盤のような 硬い 殻に 覆われているが 力は 強く 暴れると 山も 崩れてしまう。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ロケットずつき" },
			damage: 20,
			cost: ["Colorless", "Colorless"],
		},
		{
			name: { ja: "すなあらし" },
			cost: ["Fighting", "Fighting"],
			effect: {
				ja: "おたがいのポケモン（[闘]ポケモンをのぞく）全員に、それぞれ20ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559186,
			},
		},
	],

	evolveFrom: {
		ja: "ヨーギラス",
	},

	retreat: 1,
	rarity: "Uncommon",
	dexId: [247],
};

export default card;
