import { Card } from "models/database/card";
import Set from "../SM10b";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "アグノム",
	},

	illustrator: "Mizue",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		'ja-jp': "意思の神と 呼ばれている。 湖の 底で 眠り続け 世界の バランスを とっている。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "サイコパワー" },
			cost: ["Colorless"],
			effect: {
				'ja-jp': "ダメカン3個を、相手のポケモンに好きなようにのせる。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557232,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [482],
};

export default card;
