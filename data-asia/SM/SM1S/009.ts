import { Card } from "../../../interfaces";
import Set from "../SM1S";

const card: Card = {
	set: Set,
	name: {
		ja: "ガーディ",
	},

	illustrator: "MAHOU",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],

	description: {
		ja: "利口で 忠実。 ただし 見知らぬ者や 縄張りを 侵す 者には 吠えたてて いかく するぞ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "とっしん" },
			damage: 60,
			cost: ["Fire", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンにも20ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561683,
			},
		},
	],

	retreat: 2,
	rarity: "Common",
	dexId: [58],
};

export default card;
