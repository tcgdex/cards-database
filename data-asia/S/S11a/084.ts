import { Card } from "../../../interfaces";
import Set from "../S11a";

const card: Card = {
	set: Set,
	name: {
		ja: "ジャローダV",
	},

	illustrator: "Teeziro",
	category: "Pokemon",
	hp: 210,
	types: ["Grass"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "けだかいひかり" },
			cost: ["Colorless"],
			effect: {
				ja: "おたがいのポケモン全員のHPを、それぞれ「30」回復する。",
			},
		},
		{
			name: { ja: "ソーラービーム" },
			damage: 120,
			cost: ["Grass", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 673401,
				tcgplayer: 570847,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Character Super Rare",
	dexId: [497],
};

export default card;
