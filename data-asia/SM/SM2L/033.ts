import { Card } from "../../../interfaces";
import Set from "../SM2L";

const card: Card = {
	set: Set,
	name: {
		ja: "ダンバル",
	},

	illustrator: "Kyoko Umemoto",
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
			type: "normal",
			thirdParty: {
				cardmarket: 561437,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [374],
};

export default card;
