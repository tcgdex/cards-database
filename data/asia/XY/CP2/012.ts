import { Card } from "../../../interfaces";
import Set from "../CP2";

const card: Card = {
	set: Set,
	name: {
		ja: "フーパEX",
	},

	illustrator: "Hitoshi Ariga",
	category: "Pokemon",
	hp: 140,
	types: ["Psychic"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "いじげんリング" },
			cost: ["Psychic"],
			effect: {
				ja: "自分の山札からグッズを2枚まで選び、相手に見せてから、手札に加える。そして山札を切る。",
			},
		},
		{
			name: { ja: "ワンダートリック" },
			damage: 100,
			cost: ["Psychic", "Psychic", "Psychic"],
			effect: {
				ja: "相手のバトルポケモンをベンチポケモンと入れ替える。［バトル場に出すポケモンは相手が選ぶ。］",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 563493,
				tcgplayer: 605340,
			},
		},
	],

	retreat: 2,
	rarity: "Double rare",
	dexId: [720],

	suffix: "EX",
};

export default card;
