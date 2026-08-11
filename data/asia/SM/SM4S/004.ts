import { Card } from "../../../interfaces";
import Set from "../SM4S";

const card: Card = {
	set: Set,
	name: {
		ja: "メェークル",
	},

	illustrator: "Naoki Saito",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		ja: "人と 暮らすようになった 最初の ポケモンと 言われる。 穏やかな 性格の ポケモン。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "タネばくだん" },
			damage: 20,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560316,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [672],
};

export default card;
