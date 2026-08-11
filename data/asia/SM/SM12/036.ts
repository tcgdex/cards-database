import { Card } from "models/database/card";
import Set from "../SM12";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "コスモッグ",
	},

	illustrator: "Mizue",
	category: "Pokemon",
	hp: 50,
	types: ["Psychic"],

	description: {
		'ja-jp': "頼りない ガス状の 身体は ちょっとの 風にも 流されるが 全然 気にして いない 様子。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "かくせい" },
			cost: ["Psychic"],
			effect: {
				'ja-jp': "このポケモンから進化するカードを、自分の山札から1枚選び、このポケモンにのせて進化させる。そして山札を切る。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 554853,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [789],
};

export default card;
