import { Card } from "../../../interfaces";
import Set from "../SM6";

const card: Card = {
	set: Set,
	name: {
		ja: "トリミアン",
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],

	description: {
		ja: "大昔の カロス地方では 王様を 護衛する 役目を 与えられた ポケモン。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "おんがえし" },
			damage: 20,
			cost: ["Colorless"],
			effect: {
				ja: "のぞむなら、自分の手札が5枚になるように、山札を引く。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559618,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [676],
};

export default card;
