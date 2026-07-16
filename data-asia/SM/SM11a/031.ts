import { Card } from "../../../interfaces";
import Set from "../SM11a";

const card: Card = {
	set: Set,
	name: {
		ja: "ズガドーン",
	},

	illustrator: "Hasuno",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],

	description: {
		ja: "クネクネ動いて 人に 近付くと 突然 頭を 爆発させた。 ウルトラビーストの 一種らしい。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "デプスボム" },
			cost: ["Psychic", "Colorless"],
			effect: {
				ja: "ダメカン4個を、相手のポケモンに好きなようにのせる。相手のサイドの残り枚数が3枚なら、のせるダメカンの数は12個になる。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 556647,
			},
		},
	],

	retreat: 2,
	regulationMark: "C",
	rarity: "Rare",
	dexId: [806],
};

export default card;
