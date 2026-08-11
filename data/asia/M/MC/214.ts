import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ナミイルカ",
	},

	illustrator: "Narumi Sato",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		ja: "水のリングは 頭の 穴から 出る 粘着液と 海の水を 混ぜて 作り出したものなのだ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "アクアスラッシュ" },
			damage: 30,
			cost: ["Water"],
			effect: {
				ja: "次の自分の番、このポケモンはワザが使えない。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863510,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [963],
};

export default card;
