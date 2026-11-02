import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ワンパチ",
	},

	illustrator: "kurumitsu",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],

	description: {
		ja: "走る ときに しっぽの 根元から 電気を 生み出す。 ガラルでは 牧羊犬として 人気。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "きまぐれタックル" },
			damage: 20,
			cost: ["Colorless"],
			effect: {
				ja: "コインを1回投げウラなら、このワザは失敗。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863564,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [835],
};

export default card;
