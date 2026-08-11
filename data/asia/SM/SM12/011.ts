import { Card } from "models/database/card";
import Set from "../SM12";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "マッシブーン",
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],

	description: {
		'ja-jp': "この世界では 異質で 危険だが 本来 棲んでいる 世界では 普通に 見かける 生物らしい。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ビーストブースト" },
			effect: {
				'ja-jp': "このポケモンが使うワザの、相手のバトルポケモンへのダメージは、自分がすでにとったサイド1枚につき「+20」される。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "タッチダウン" },
			damage: 60,
			cost: ["Grass", "Colorless"],
			effect: {
				'ja-jp': "このポケモンのHPを「30」回復する。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 554773,
			},
		},
	],

	retreat: 2,
	regulationMark: "C",
	rarity: "Rare",
	dexId: [794],
};

export default card;
