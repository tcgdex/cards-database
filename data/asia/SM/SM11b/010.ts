import { Card } from "../../../interfaces";
import Set from "../SM11b";

const card: Card = {
	set: Set,
	name: {
		ja: "ポッタイシ",
	},

	illustrator: "Hasuno",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],

	description: {
		ja: "群れを 作らずに １匹で いる。 自分が 一番 偉いと どの ポッタイシも 考えているようだ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "みずきり" },
			damage: 20,
			cost: ["Water"],
		},
		{
			name: { ja: "ダイレクトダイブ" },
			cost: ["Water", "Water", "Water"],
			effect: {
				ja: "このポケモンについているエネルギーをすべてトラッシュし、相手のベンチポケモン1匹に、100ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 555142,
			},
		},
	],

	evolveFrom: {
		ja: "ポッチャマ",
	},

	retreat: 2,
	regulationMark: "C",
	rarity: "Common",
	dexId: [394],
};

export default card;
