import { Card } from "../../../interfaces";
import Set from "../SM3p";

const card: Card = {
	set: Set,
	name: {
		ja: "ガオガエン",
	},

	illustrator: "Emi Ando",
	category: "Pokemon",
	hp: 170,
	types: ["Fire"],

	description: {
		ja: "粗暴で 身勝手な 性格。 気分が 乗らなければ トレーナーの 命令も 平気で 無視するぞ。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "ガッデムパンチ" },
			damage: "50+",
			cost: ["Fire", "Colorless"],
			effect: {
				ja: "自分のベンチポケモンにダメカンがのっているなら、80ダメージ追加。",
			},
		},
		{
			name: { ja: "フレアドライブ" },
			damage: 180,
			cost: ["Fire", "Fire", "Colorless"],
			effect: {
				ja: "このポケモンについている[炎]エネルギーを、すべてトラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560176,
			},
		},
	],

	evolveFrom: {
		ja: "ニャヒート",
	},

	retreat: 2,
	rarity: "Uncommon",
	dexId: [727],
};

export default card;
