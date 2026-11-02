import { Card } from "../../../interfaces";
import Set from "../SM3p";

const card: Card = {
	set: Set,
	name: {
		ja: "ビリリダマ",
	},

	illustrator: "match",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	description: {
		ja: "モンスターボールが 売り出されたのと 同じ 時期に 発見された。 なにか 関係があると いわれる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "エレキボール" },
			damage: 10,
			cost: ["Lightning"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Metal", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560189,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [100],
};

export default card;
