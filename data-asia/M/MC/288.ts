import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ロケット団のスリープ",
	},

	illustrator: "matazo",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],

	description: {
		ja: "食べた夢は 全部 覚えている。 子どもの 夢のほうが 美味しいので めったに 大人の 夢は食べない。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "さいみんこうせん" },
			damage: 10,
			cost: ["Psychic"],
			effect: {
				ja: "相手のバトルポケモンをねむりにする。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863590,
			},
		},
	],

	retreat: 2,
	regulationMark: "I",
	rarity: "None",
	dexId: [96],
};

export default card;
