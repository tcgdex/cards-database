import { Card } from "../../../interfaces";
import Set from "../S6H";

const card: Card = {
	set: Set,
	name: {
		ja: "サダイジャV",
	},

	illustrator: "PLANETA Tsuji",
	category: "Pokemon",
	hp: 220,
	types: ["Fighting"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "すなのぼうへき" },
			effect: {
				ja: "このポケモンが受けるワザのダメージは「-30」される。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ランドクラッシュ" },
			damage: 140,
			cost: ["Fighting", "Fighting", "Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 560953,
				tcgplayer: 569208,
			},
		},
	],

	retreat: 2,
	regulationMark: "E",
	rarity: "Ultra Rare",
	dexId: [844],
};

export default card;
