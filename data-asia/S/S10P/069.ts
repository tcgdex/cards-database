import { Card } from "../../../interfaces";
import Set from "../S10P";

const card: Card = {
	set: Set,
	name: {
		ja: "スピアーV",
	},

	illustrator: "Narumi Sato",
	category: "Pokemon",
	hp: 210,
	types: ["Grass"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ダブルニードル" },
			damage: "40×",
			cost: ["Grass"],
			effect: {
				ja: "コインを2回投げ、オモテの数×40ダメージ。",
			},
		},
		{
			name: { ja: "むれでさす" },
			cost: ["Grass", "Grass", "Colorless"],
			effect: {
				ja: "相手のポケモン1匹に、自分の場の｢スピアーV｣の数×50ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 651332,
				tcgplayer: 569912,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Ultra Rare",
	dexId: [15],
};

export default card;
