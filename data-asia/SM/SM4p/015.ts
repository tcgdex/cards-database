import { Card } from "../../../interfaces";
import Set from "../SM4p";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒトモシ",
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 50,
	types: ["Fire"],

	description: {
		ja: "明かりを 灯して 道案内を するように 見せかけながら 生命力を 吸い取っている。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ゆれるほのお" },
			damage: 10,
			cost: ["Fire"],
			effect: {
				ja: "相手のバトルポケモンをねむりにする。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560048,
			},
		},
	],

	retreat: 1,
	rarity: "None",
	dexId: [607],
};

export default card;
