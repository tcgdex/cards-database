import { Card } from "models/database/card";
import Set from "../SM8b";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "フーパ",
	},

	illustrator: "TOKIYA",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],

	description: {
		'ja-jp': "真の姿は 巨大な 力を 持っている。 財宝 欲しさに それが 隠された 城ごと 引き抜き 奪い去った という 伝説が ある。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "バンデットガード" },
			effect: {
				'ja-jp': "このポケモンは、相手の「ポケモンGX・EX」からワザのダメージや効果を受けない。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ちょうねんりき" },
			damage: 80,
			cost: ["Darkness", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 550856,
			},
		},
	],

	retreat: 2,
	rarity: "None",
	dexId: [720],
};

export default card;
