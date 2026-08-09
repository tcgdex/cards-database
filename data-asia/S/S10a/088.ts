import { Card } from "../../../interfaces";
import Set from "../S10a";

const card: Card = {
	set: Set,
	name: {
		ja: "ラブトロスV",
	},

	illustrator: "AKIRA EGAWA",
	category: "Pokemon",
	hp: 210,
	types: ["Psychic"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "あいのしゅごしん" },
			effect: {
				ja: "このポケモンがいるかぎり、[P]エネルギーがついている自分のポケモン（「ラブトロスV」をのぞく）全員は、相手のポケモンから特性の効果を受けない。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ブロッサムテール" },
			damage: 100,
			cost: ["Psychic", "Colorless", "Colorless"],
			effect: {
				ja: "自分のトラッシュから基本エネルギーを2枚まで選び、ベンチポケモンに好きなようにつける。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 657067,
				tcgplayer: 570751,
			},
		},
	],

	retreat: 2,
	regulationMark: "F",
	rarity: "Character Super Rare",
	dexId: [905],
};

export default card;
