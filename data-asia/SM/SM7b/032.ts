import { Card } from "../../../interfaces";
import Set from "../SM7b";

const card: Card = {
	set: Set,
	name: {
		ja: "メレシー",
	},

	illustrator: "Ken Sugimori",
	category: "Pokemon",
	hp: 90,
	types: ["Fairy"],

	description: {
		ja: "さほど 珍しいわけではないが キラキラと 輝く 宝石の 身体が 女性に 人気だ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ワンダーレイ" },
			damage: 30,
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "次の相手の番、このポケモンは特性を持つポケモンからワザのダメージや効果を受けない。",
			},
		},
		{
			name: { ja: "パワージェム" },
			damage: 60,
			cost: ["Fairy", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [{ type: "Darkness", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558857,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [703],
};

export default card;
