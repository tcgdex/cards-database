import { Card } from "../../../interfaces";
import Set from "../SM10b";

const card: Card = {
	set: Set,
	name: {
		ja: "エムリット",
	},

	illustrator: "Sekio",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		ja: "悲しみの 苦しさと 喜びの 尊さを 人々に 教えた。 感情の神と 呼ばれている。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "コンタクト" },
			cost: ["Psychic"],
			effect: {
				ja: "自分の山札にあるたねポケモンを3枚まで、ベンチに出す。そして山札を切る。",
			},
		},
		{
			name: { ja: "つぶやく" },
			damage: 20,
			cost: ["Psychic"],
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557231,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [481],
};

export default card;
