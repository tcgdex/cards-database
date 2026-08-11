import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "ズバット",
	},

	illustrator: "Mékayu",
	category: "Pokemon",
	hp: 40,
	types: ["Darkness"],

	description: {
		ja: "口から 出す 超音波で まわりの 様子を 探る。 狭い 洞窟も 器用に 飛びまわる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ちょうおんぱ" },
			cost: ["Darkness"],
			effect: {
				ja: "相手のバトルポケモンをこんらんにする。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 876947,
			},
		},
	],

	retreat: 0,
	regulationMark: "J",
	rarity: "Common",
	dexId: [41],
};

export default card;
