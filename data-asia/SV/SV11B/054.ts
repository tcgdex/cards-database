import { Card } from "../../../interfaces";
import Set from "../SV11B";

const card: Card = {
	set: Set,
	name: {
		ja: "イシズマイ",
	},

	illustrator: "Tetsu Kayama",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		ja: "石を 溶かす 液体を 口から 分泌するので 硬い 石でも 簡単に 穴を 開けられるのだ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "じたばた" },
			damage: "10x",
			cost: ["Colorless"],
			effect: { ja: "このポケモンにのっているダメカンの数×10ダメージ。" },
		},
		{
			name: { ja: "ツメをたてる" },
			damage: 20,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{ type: "normal" },
		{ type: "reverse", foil: "pokeball" },
		{ type: "reverse", foil: "masterball" },
	],

	retreat: 2,
	regulationMark: "I",
	rarity: "Common",
	dexId: [557],

	thirdParty: {
		cardmarket: 828522,
		tcgplayer: 636408,
	},
};

export default card;
