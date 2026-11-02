import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "ドラメシヤ",
	},

	illustrator: "Jerky",
	category: "Pokemon",
	hp: 70,
	types: ["Dragon"],

	description: {
		ja: "食べもしないのに ウデッポウに 食らいつくのは 生きていたころの 行動の 名残りと 言われている。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ちょっとうらむ" },
			damage: 10,
			cost: ["Psychic"],
		},
		{
			name: { ja: "かみつく" },
			damage: 40,
			cost: ["Fire", "Psychic"],
		},
	],

	weaknesses: [],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 861454,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "Illustration rare",
	dexId: [885],
};

export default card;
