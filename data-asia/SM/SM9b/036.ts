import { Card } from "../../../interfaces";
import Set from "../SM9b";

const card: Card = {
	set: Set,
	name: {
		ja: "ゲノセクト",
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],

	description: {
		ja: "プラズマ団によって 改造された 古代の むしポケモン。 背中の 大砲が パワーアップした。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "こうそくひこうけいたい" },
			effect: {
				ja: "相手の場に「ポケモンGX・EX」がいるなら、このポケモンのにげるためのエネルギーは、すべてなくなる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "スプリットビーム" },
			damage: 30,
			cost: ["Metal", "Colorless", "Colorless"],
			effect: {
				ja: "相手のベンチポケモン2匹にも、それぞれ30ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558154,
			},
		},
	],

	retreat: 2,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [649],
};

export default card;
