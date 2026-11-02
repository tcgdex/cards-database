import { Card } from "../../../interfaces";
import Set from "../SM11a";

const card: Card = {
	set: Set,
	name: {
		ja: "マーシャドー",
	},

	illustrator: "0313",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		ja: "相手の 影に 潜って 動きや 力を 真似る。 真似ているうちに 本物 よりも 強くなるぞ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "かげまね" },
			cost: ["Psychic", "Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンが持っているワザ（GXワザをのぞく）を1つ選び、このワザとして使う。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 556643,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [802],
};

export default card;
