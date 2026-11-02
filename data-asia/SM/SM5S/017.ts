import { Card } from "../../../interfaces";
import Set from "../SM5S";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒコザル",
	},

	illustrator: "Ken Sugimori",
	category: "Pokemon",
	hp: 40,
	types: ["Fire"],

	description: {
		ja: "お腹で 作られた ガスが お尻で 燃えている。 体調が 悪いと 炎が 弱くなる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ほのお" },
			damage: 20,
			cost: ["Fire"],
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559971,
			},
		},
	],

	retreat: 0,
	rarity: "Common",
	dexId: [390],
};

export default card;
