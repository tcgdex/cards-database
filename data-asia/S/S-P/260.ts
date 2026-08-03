import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "リオル",
	},

	illustrator: "Taira Akitsu",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],

	description: {
		ja: "一晩中 走っていられる スタミナを もつ。 活発で 散歩の 相手は たいへん。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "けたぐり" },
			damage: 50,
			cost: ["Fighting", "Fighting"],
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 597433,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Promo",
	dexId: [447],
};

export default card;
