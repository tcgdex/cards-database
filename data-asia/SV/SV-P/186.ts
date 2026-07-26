import { Card } from "../../../interfaces";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒポポタス",
	},

	illustrator: "Minahamu",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],

	description: {
		ja: "砂で 体を 覆うことで ばい菌から 身を 守る。 砂漠の 砂の 中を 移動。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "つきとばす" },
			damage: 10,
			cost: ["Fighting"],
			effect: {
				ja: "相手のバトルポケモンをベンチポケモンと入れ替える。［バトル場に出すポケモンは相手が選ぶ。］",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 793382,
			},
		},
	],

	retreat: 3,
	regulationMark: "H",
	rarity: "Promo",
	dexId: [449],
};

export default card;
