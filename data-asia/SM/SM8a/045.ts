import { Card } from "../../../interfaces";
import Set from "../SM8a";

const card: Card = {
	set: Set,
	name: {
		ja: "クレッフィ",
	},

	illustrator: "Shigenori Negishi",
	category: "Pokemon",
	hp: 60,
	types: ["Metal"],

	description: {
		ja: "頭の角を 金属の すき間に 突っ込んで 金属イオンを 吸う。 なぜか カギを 集めている。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ないしょのカギ" },
			effect: {
				ja: "このポケモンがいるかぎり、自分の[鋼]ポケモン全員の抵抗力は、すべて「-40」になる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ぶつかる" },
			damage: 30,
			cost: ["Metal", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558619,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [707],
};

export default card;
