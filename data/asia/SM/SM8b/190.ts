import { Card } from "../../../interfaces";
import Set from "../SM8b";

const card: Card = {
	set: Set,
	name: {
		ja: "ダンバル",
	},

	illustrator: "Mizue",
	category: "Pokemon",
	hp: 60,
	types: ["Metal"],

	description: {
		ja: "細胞 すべてが 磁石。 磁力を 使って 仲間と コミュニケーションを 取る。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "コアビーム" },
			damage: 20,
			cost: ["Metal"],
			effect: {
				ja: "このポケモンについている[鋼]エネルギーを、1個トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 551446,
			},
		},
	],

	retreat: 1,
	rarity: "Ultra Rare",
	dexId: [374],
};

export default card;
