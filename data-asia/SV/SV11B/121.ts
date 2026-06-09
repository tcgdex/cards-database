import { Card } from "../../../interfaces";
import Set from "../SV11B";

const card: Card = {
	set: Set,
	name: {
		ja: "ムンナ",
	},

	illustrator: "miki kudo",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "ムンナに 夢を 食べられてしまうと 夢の 内容を 忘れてしまう。 つねに 空中に 浮かんでいる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ねむる" },
			cost: ["Colorless"],
			effect: {
				ja: "このポケモンをねむりにする。このポケモンのHPを「30」回復する。",
			},
		},
		{ name: { ja: "つぶやく" }, damage: 10, cost: ["Psychic"] },
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [{ type: "holo" }],

	retreat: 1,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [517],

	thirdParty: {
		cardmarket: 829365,
		tcgplayer: 636475,
	},
};

export default card;
