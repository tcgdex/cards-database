import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "フシデ",
	},

	illustrator: "Tomokazu Komiya",
	category: "Pokemon",
	hp: 80,
	types: ["Darkness"],

	description: {
		ja: "ヤクデは 種類の 近い 仲間だが おたがいが 出会うと 大げんかに なるぞ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "どくえき" },
			cost: ["Darkness"],
			effect: {
				ja: "相手のバトルポケモンをどくにする。",
			},
		},
		{
			name: { ja: "かいてんアタック" },
			damage: 40,
			cost: ["Darkness", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863762,
			},
		},
	],

	retreat: 3,
	regulationMark: "H",
	rarity: "None",
	dexId: [543],
};

export default card;
