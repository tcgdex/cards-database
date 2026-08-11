import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ダンバル",
	},

	illustrator: "hatachu",
	category: "Pokemon",
	hp: 70,
	types: ["Metal"],

	description: {
		ja: "磁力を お尻から 発生させ 敵を 勢いよく 吸いよせて 鋭い ツメで 串刺しにする。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ツメをたてる" },
			damage: 10,
			cost: ["Metal"],
		},
		{
			name: { ja: "アイアンタックル" },
			damage: 50,
			cost: ["Metal", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンにも10ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863798,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [374],
};

export default card;
