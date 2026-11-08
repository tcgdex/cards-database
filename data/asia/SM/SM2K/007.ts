import { Card } from "models/database/card";
import Set from "../SM2K";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "グソクムシャ",
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],

	description: {
		'ja-jp': "鋭く 巨大な ツメで 一閃。 空気や 海水さえ 一刀両断の 腕前。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "そうこう" },
			effect: {
				'ja-jp': "このポケモンが受けるワザのダメージは「-30」される。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "かくごのツメ" },
			damage: "80+",
			cost: ["Grass", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "相手のバトルポケモンが「ポケモンGX・EX」なら、70ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 561473,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "コソクムシ",
	},

	retreat: 2,
	rarity: "Rare",
	dexId: [768],
};

export default card;
