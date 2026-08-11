import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "キバニア",
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	hp: 50,
	types: ["Water"],

	description: {
		ja: "獲物を 見つけても １匹のときは 襲わない。 仲間が 来るのを 待って 集団で 襲いかかる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "スプラッシュ" },
			damage: 30,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863474,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [318],
};

export default card;
