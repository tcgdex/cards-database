import { Card } from "../../../interfaces";
import Set from "../MF";

const card: Card = {
	set: Set,
	name: {
		ja: "ゾロアーク",
	},

	illustrator: "Shiburingaru",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],

	description: {
		ja: "いっぺんに 大勢の 人を 化かす 力を 持つ。 幻の 景色を 見せて 棲み処を 守る。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "よるのぬけみち" },
			effect: {
				ja: "このポケモンがベンチにいるかぎり、自分のバトルポケモンのにげるためのエネルギーは、2個ぶん少なくなる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "スラッシュクロー" },
			damage: 90,
			cost: ["Darkness", "Darkness", "Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 908382,
			},
		},
	],

	evolveFrom: {
		ja: "ゾロア",
	},

	retreat: 1,
	regulationMark: "J",
	rarity: "None",
	dexId: [571],
};

export default card;
