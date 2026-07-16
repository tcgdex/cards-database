import { Card } from "../../../interfaces";
import Set from "../SM11b";

const card: Card = {
	set: Set,
	name: {
		ja: "ソルガレオ&ルナアーラGX",
	},

	illustrator: "",
	category: "Pokemon",
	hp: 270,
	types: ["Psychic"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "コズミックバーン" },
			damage: 230,
			cost: ["Psychic", "Psychic", "Psychic", "Colorless"],
			effect: {
				ja: "次の自分の番、このポケモンは「コズミックバーン」が使えない。",
			},
		},
		{
			name: { ja: "めがみのひかりGX" },
			damage: 200,
			cost: ["Psychic", "Psychic", "Colorless"],
			effect: {
				ja: "追加でこの番、手札から「リーリエの全力」を出して使っていたなら、次の相手の番、自分のポケモン全員は、ワザのダメージや効果を受けない。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 555322,
			},
		},
	],

	retreat: 2,
	regulationMark: "C",
	rarity: "Hyper rare",
	dexId: [791, 792],

	suffix: "TAG TEAM-GX",
};

export default card;
