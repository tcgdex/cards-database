import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "ハリーセン",
	},

	illustrator: "nisimono",
	category: "Pokemon",
	hp: 90,
	types: ["Darkness"],

	description: {
		ja: "",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "どくのトゲ" },
			effect: {
				ja: "このポケモンがバトル場にいるとき、相手のポケモンのワザのダメージを受けたなら、そのポケモンをどくにする。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ベノムショック" },
			damage: "30+",
			cost: ["Darkness"],
			effect: {
				ja: "相手のバトルポケモンがどくなら、このワザのダメージは「50」多くなる。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [{ type: "normal" }, { type: "reverse", foil: "pokeball" }, { type: "reverse", foil: "masterball" }],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [211],
};

export default card;
