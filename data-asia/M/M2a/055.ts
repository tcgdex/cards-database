import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "ゼラオラ",
	},

	illustrator: "Ryuta Fuse",
	category: "Pokemon",
	hp: 100,
	types: ["Lightning"],

	description: {
		ja: "手足の 肉球から 放電。 ゼラオラが 駆け抜けると 稲妻が 光り 雷鳴が 轟く。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ひっかく" },
			damage: 20,
			cost: ["Colorless"],
		},
		{
			name: { ja: "サンダーブリッツ" },
			cost: ["Lightning", "Lightning", "Lightning"],
			effect: {
				ja: "このポケモンについているエネルギーをすべてトラッシュし、相手のベンチの「ポケモンex」1匹に、210ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 861298,
			},
		},
		{
			type: "reverse",
			foil: "energy",
			thirdParty: {
				cardmarket: 861616,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 861617,
			},
		},
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "None",
	dexId: [807],
};

export default card;
