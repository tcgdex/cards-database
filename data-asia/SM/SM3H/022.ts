import { Card } from "../../../interfaces";
import Set from "../SM3H";

const card: Card = {
	set: Set,
	name: {
		ja: "フシデ",
	},

	illustrator: "Yukiko Baba",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "頭と 尻尾の 触角で まわりの 様子を 探る。 非常に 凶暴な 性格。",
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
				ja: "相手のバトルポケモンがどくなら、40ダメージ追加。",
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
