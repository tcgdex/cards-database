import { Card } from "../../../interfaces";
import Set from "../SM12";

const card: Card = {
	set: Set,
	name: {
		ja: "ユレイドル",
	},

	illustrator: "otumami",
	category: "Pokemon",
	hp: 150,
	types: ["Grass"],

	description: {
		ja: "普段は 浅瀬の 海底に 棲み 潮が 引くと そのまま 陸に あがって 獲物を 探していた。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ゆらゆらしばり" },
			effect: {
				ja: "このポケモンがいるかぎり、相手の特殊状態のポケモンは、にげられない。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "どくのしょくしゅ" },
			damage: 110,
			cost: ["Grass", "Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをどくにする。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 554754,
			},
		},
	],

	evolveFrom: {
		ja: "リリーラ",
	},

	retreat: 3,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [346],
};

export default card;
