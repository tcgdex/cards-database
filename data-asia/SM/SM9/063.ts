import { Card } from "../../../interfaces";
import Set from "../SM9";

const card: Card = {
	set: Set,
	name: {
		ja: "ミニリュウ",
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 70,
	types: ["Dragon"],

	description: {
		ja: "まだ 弱いので 水底に 身を 潜め 沈んできた ものを 食らいながら ひそかに 暮らす。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "まもりのうろこ" },
			effect: {
				ja: "このポケモンは、相手のポケモンが使うワザの効果を受けない。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "みずかけ" },
			damage: 10,
			cost: ["Water"],
		},
	],

	weaknesses: [{ type: "Fairy", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558389,
			},
		},
	],

	retreat: 2,
	regulationMark: "C",
	rarity: "Common",
	dexId: [147],
};

export default card;
