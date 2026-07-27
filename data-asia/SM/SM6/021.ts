import { Card } from "../../../interfaces";
import Set from "../SM6";

const card: Card = {
	set: Set,
	name: {
		ja: "ウデッポウ",
	},

	illustrator: "Midori Harada",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		ja: "体内ガスの 爆発で 水を ピストルのように 発射する。 至近距離なら 岩を 砕く。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "みずでっぽう" },
			damage: 10,
			cost: ["Water"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559566,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [692],
};

export default card;
