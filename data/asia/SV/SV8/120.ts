import { Card } from "models/database/card";
import Set from "../SV8";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "スコヴィランex",
	},

	illustrator: "PLANETA Igarashi",
	category: "Pokemon",
	hp: 260,
	types: ["Fire"],

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ダブルタイプ" },
			effect: {
				'ja-jp': "このポケモンは、場にいるかぎり[G]と[R]の2つのタイプになる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "スパイシーレイジ" },
			damage: "10+",
			cost: ["Fire", "Fire"],
			effect: {
				'ja-jp': "このポケモンにのっているダメカンの数×70ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 793584,
				tcgplayer: 587720,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "カプサイジ",
	},

	retreat: 2,
	regulationMark: "H",
	rarity: "Ultra Rare",
	dexId: [952],

	suffix: "EX",
};

export default card;
