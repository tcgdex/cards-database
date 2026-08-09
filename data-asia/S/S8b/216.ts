import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "バシャーモV",
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 210,
	types: ["Fire"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "とびひざげり" },
			damage: 50,
			cost: ["Colorless", "Colorless"],
		},
		{
			name: { ja: "ほのおのうず" },
			damage: 210,
			cost: ["Fire", "Fire", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーを2個選び、トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 587014,
				tcgplayer: 571468,
			},
		},
	],

	retreat: 2,
	regulationMark: "E",
	rarity: "Character Super Rare",
	dexId: [257],
};

export default card;
