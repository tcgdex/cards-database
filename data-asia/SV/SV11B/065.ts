import { Card } from "../../../interfaces";
import Set from "../SV11B";

const card: Card = {
	set: Set,
	name: {
		ja: "シュバルゴ",
	},

	illustrator: "DOM",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],

	description: {
		ja: "高速で 飛び回り 鋭い やりで 相手を 突く。 不利な 相手にも 勇敢に 立ち向かう。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ワイルドランス" },
			damage: 90,
			cost: ["Metal"],
			effect: { ja: "このポケモンにも30ダメージ。" },
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{ type: "normal" },
		{ type: "reverse", foil: "pokeball" },
		{ type: "reverse", foil: "masterball" },
	],

	evolveFrom: {
		ja: "カブルモ",
	},

	retreat: 3,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [589],

	thirdParty: {
		cardmarket: 828593,
		tcgplayer: 636419,
	},
};

export default card;
