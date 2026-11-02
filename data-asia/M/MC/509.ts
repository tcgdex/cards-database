import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ガラル マッギョ",
	},

	illustrator: "Aya Kusube",
	category: "Pokemon",
	hp: 100,
	types: ["Metal"],

	description: {
		ja: "鉄分 たっぷりの 泥の 中で 生息していたため 頑丈な 鋼の 体に 変化した。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "どろかけ" },
			damage: 40,
			cost: ["Colorless", "Colorless"],
		},
		{
			name: { ja: "とびつきバイト" },
			damage: 100,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンにも30ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863811,
			},
		},
	],

	retreat: 2,
	regulationMark: "H",
	rarity: "None",
	dexId: [618],
};

export default card;
