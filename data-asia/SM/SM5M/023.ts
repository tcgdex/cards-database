import { Card } from "../../../interfaces";
import Set from "../SM5M";

const card: Card = {
	set: Set,
	name: {
		ja: "フワンテ",
	},

	illustrator: "Asako Ito",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		ja: "なにかの 拍子で 身体が 割れると 叫びのような 音と ともに 魂が あふれだす。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ぶきみなかぜ" },
			cost: ["Psychic"],
			effect: {
				ja: "相手のバトルポケモンをこんらんにする。",
			},
		},
		{
			name: { ja: "ぶらさがる" },
			damage: 10,
			cost: ["Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559836,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [425],
};

export default card;
