import { Card } from "../../../interfaces";
import Set from "../SM1p";

const card: Card = {
	set: Set,
	name: {
		ja: "コスモッグ",
	},

	illustrator: "Megumi Mizutani",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		ja: "はかない ガス状の 身体。 大気の チリを 集めながら ゆっくりと 成長していく。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ちりあつめ" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札を1枚引く。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561555,
			},
		},
	],

	retreat: 1,
	rarity: "None",
	dexId: [789],
};

export default card;
