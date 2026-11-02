import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "ニンフィアV",
	},

	illustrator: "Megumi Mizutani",
	category: "Pokemon",
	hp: 200,
	types: ["Psychic"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ドリームギフト" },
			effect: {
				ja: "自分の番に1回使えて、使ったなら、自分の番は終わる。自分の山札からグッズを1枚選び、相手に見せて、手札に加える。そして山札を切る。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "マジカルショット" },
			damage: 60,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 587029,
				tcgplayer: 571483,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "Character Super Rare",
	dexId: [700],
};

export default card;
