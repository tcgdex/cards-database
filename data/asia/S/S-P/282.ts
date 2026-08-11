import { Card } from "models/database/card";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ガチグマV",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 230,
	types: ["Fighting"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ハードコート" },
			effect: {
				'ja-jp': "このポケモンが受けるワザのダメージは「-30」される。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ピートショルダー 220-" },
			cost: ["Fighting", "Fighting", "Fighting"],
			effect: {
				'ja-jp': "このポケモンにのっているダメカンの数×10ダメージぶん、このワザのダメージは小さくなる。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 650954,
				tcgplayer: 597455,
			},
		},
	],

	retreat: 4,
	rarity: "Promo",
	dexId: [901],
};

export default card;
