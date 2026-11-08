import { Card } from "models/database/card";
import Set from "../SM3H";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "フシデ",
	},

	illustrator: "Yukiko Baba",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		'ja-jp': "頭と 尻尾の 触角で まわりの 様子を 探る。 非常に 凶暴な 性格。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "むしくい" },
			damage: 10,
			cost: ["Psychic"],
		},
		{
			name: { ja: "ベノムショック" },
			damage: "20+",
			cost: ["Colorless", "Colorless"],
			effect: {
				'ja-jp': "相手のバトルポケモンがどくなら、40ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561086,
			},
		},
	],

	retreat: 2,
	rarity: "Common",
	dexId: [543],
};

export default card;
