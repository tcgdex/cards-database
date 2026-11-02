import { Card } from "../../../interfaces";
import Set from "../S8";

const card: Card = {
	set: Set,
	name: {
		ja: "ミュウVMAX",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 310,
	types: ["Psychic"],

	stage: "VMAX",

	attacks: [
		{
			name: { ja: "クロスフュージョン" },
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "自分のベンチの「フュージョン」のポケモンが持っているワザを1つ選び、このワザとして使う。",
			},
		},
		{
			name: { ja: "ダイミラクル" },
			damage: 130,
			cost: ["Psychic", "Psychic"],
			effect: {
				ja: "このワザのダメージは、相手のバトルポケモンにかかっている効果を計算しない。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 576196,
				tcgplayer: 569619,
			},
		},
	],

	evolveFrom: {
		ja: "ミュウV",
	},

	retreat: 0,
	regulationMark: "E",
	rarity: "Hyper rare",
	dexId: [151],
};

export default card;
