import { Card } from "../../../interfaces";
import Set from "../SM3H";

const card: Card = {
	set: Set,
	name: {
		ja: "アブリー",
	},

	illustrator: "Atsuko Nishida",
	category: "Pokemon",
	hp: 30,
	types: ["Fairy"],

	description: {
		ja: "花のミツや 花粉が 餌。 オーラを 感じる 力を 持ち 咲きそうな 花を 見分けている。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ようせいのかぜ" },
			damage: 10,
			cost: ["Colorless"],
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [{ type: "Darkness", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561102,
			},
		},
	],

	retreat: 0,
	rarity: "Common",
	dexId: [742],
};

export default card;
