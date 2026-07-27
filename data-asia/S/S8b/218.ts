import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "マルヤクデV",
	},

	illustrator: "Yuya Oka",
	category: "Pokemon",
	hp: 210,
	types: ["Fire"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ねつほうしゃ" },
			damage: 20,
			cost: ["Fire"],
			effect: {
				ja: "のぞむなら、このポケモンについているエネルギーを1個選び、トラッシュする。その場合、相手のバトルポケモンについているエネルギーを1個選び、トラッシュする。",
			},
		},
		{
			name: { ja: "バーニングトレイン" },
			damage: 180,
			cost: ["Fire", "Fire", "Fire", "Fire"],
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 587016,
				tcgplayer: 571470,
			},
		},
	],

	retreat: 3,
	regulationMark: "D",
	rarity: "Character Super Rare",
	dexId: [851],
};

export default card;
