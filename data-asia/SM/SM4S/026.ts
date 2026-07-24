import { Card } from "../../../interfaces";
import Set from "../SM4S";

const card: Card = {
	set: Set,
	name: {
		ja: "ヤトウモリ",
	},

	illustrator: "tetsuya koizumi",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		ja: "体液を 燃やし 毒ガスを たく。 ガスを 吸った 敵が フラフラに なったあと 襲いかかるのだ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "こがす" },
			cost: ["Psychic"],
			effect: {
				ja: "相手のバトルポケモンをやけどにする。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560338,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [757],
};

export default card;
