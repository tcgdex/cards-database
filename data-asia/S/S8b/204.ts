import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "タイレーツ",
	},

	illustrator: "Kinu Nishimura",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],

	description: {
		ja: "６匹で １匹の ポケモン。 隊列を 組み替えながら チームワークで 戦うのだ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "れんげきのじん" },
			damage: "20×",
			cost: ["Fighting", "Colorless"],
			effect: {
				ja: "自分の場の「れんげき」のポケモンの数×20ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 586942,
				tcgplayer: 571456,
			},
		},
	],

	retreat: 2,
	regulationMark: "E",
	rarity: "Character Rare",
	dexId: [870],
};

export default card;
