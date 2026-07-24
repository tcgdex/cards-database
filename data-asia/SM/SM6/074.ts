import { Card } from "../../../interfaces";
import Set from "../SM6";

const card: Card = {
	set: Set,
	name: {
		ja: "オンバット",
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 50,
	types: ["Colorless"],

	description: {
		ja: "２０万ヘルツの 超音波を 浴びると 屈強な レスラーも 目が 回り 立っていられないのだ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ぶつかる" },
			damage: 10,
			cost: ["Colorless"],
		},
		{
			name: { ja: "はかいおん" },
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "相手の手札を見て、その中にあるグッズを、すべてトラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559619,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [714],
};

export default card;
