import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "パラセクト",
	},

	illustrator: "Tetsu Kayama",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	description: {
		ja: "背中の キノコが 育つほど ばらまかれる キノコの 胞子の 効果は 強力になる。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "キノコのほうし" },
			cost: ["Colorless"],
			effect: {
				ja: "相手のバトルポケモンをねむりにする。",
			},
		},
		{
			name: { ja: "シザースイング" },
			damage: "60+",
			cost: ["Grass", "Colorless"],
			effect: {
				ja: "コインを2回投げ、オモテの数×30ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863292,
			},
		},
	],

	evolveFrom: {
		ja: "パラス",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "None",
	dexId: [47],
};

export default card;
