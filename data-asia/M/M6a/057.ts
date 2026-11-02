import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		ja: "ミュウex",
	},

	illustrator: "aky CG Works",
	category: "Pokemon",
	hp: 160,
	types: ["Psychic"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "きおくのらせん" },
			effect: {
				ja: "このポケモンは、自分のベンチポケモンが持つワザを、すべて使える。［ワザを使うためのエネルギーは必要。］",
			},
		},
	],

	attacks: [
		{
			name: { ja: "テレポートブレイク" },
			damage: 30,
			cost: ["Psychic"],
			effect: {
				ja: "のぞむなら、このポケモンをベンチポケモンと入れ替える。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 908235,
			},
		},
	],

	retreat: 0,
	regulationMark: "J",
	rarity: "Double rare",
	dexId: [151],

	suffix: "EX",
};

export default card;
