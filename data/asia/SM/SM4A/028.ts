import { Card } from "models/database/card";
import Set from "../SM4A";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "デルビル",
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],

	description: {
		'ja-jp': "夜明けごろ あたり一帯に 響きわたる 不気味な 遠ぼえで 自分たちの 縄張りを アピール。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "うしろげり" },
			damage: 10,
			cost: ["Darkness"],
		},
		{
			name: { ja: "やみのキバ" },
			damage: 20,
			cost: ["Darkness", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560274,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [228],
};

export default card;
