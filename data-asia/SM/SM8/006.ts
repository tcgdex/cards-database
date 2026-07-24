import { Card } from "../../../interfaces";
import Set from "../SM8";

const card: Card = {
	set: Set,
	name: {
		ja: "イトマル",
	},

	illustrator: "Misa Tsutsui",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	description: {
		ja: "丈夫な 糸を より合わせ さかなポケモンを 捕らえる 網を こしらえる 漁師も いるぞ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "クモがくれ" },
			cost: ["Grass"],
			effect: {
				ja: "相手のバトルポケモンをどくとマヒにする。このポケモンと、ついているすべてのカードを、ロストゾーンに置く。",
			},
		},
		{
			name: { ja: "チクチクさす" },
			damage: 10,
			cost: ["Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558645,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [167],
};

export default card;
