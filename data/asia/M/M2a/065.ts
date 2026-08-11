import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "トゲチック",
	},

	illustrator: "Teeziro",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		ja: "心優しい 人の 前に 幸せを もたらすため 姿を 現すと 言われている。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ドレインキッス" },
			damage: 30,
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "このポケモンのHPを「30」回復する。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 861308,
			},
		},
		{
			type: "reverse",
			foil: "energy",
			thirdParty: {
				cardmarket: 861630,
			},
		},
		{
			type: "reverse",
			foil: "loveball",
			thirdParty: {
				cardmarket: 861631,
			},
		},
	],

	evolveFrom: {
		ja: "トゲピー",
	},

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [176],
};

export default card;
