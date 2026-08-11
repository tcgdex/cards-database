import { Card } from "../../../interfaces";
import Set from "../SM8";

const card: Card = {
	set: Set,
	name: {
		ja: "アローラペルシアン",
	},

	illustrator: "Tomokazu Komiya",
	category: "Pokemon",
	hp: 90,
	types: ["Darkness"],

	description: {
		ja: "自分以外の すべてを 見下す。 不意打ちや 闇討ちなど ひれつで ひきょうな 戦法を 好む。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "コケおどし 90-" },
			cost: [],
			effect: {
				ja: "相手のバトルポケモンについているエネルギーの数x30ダメージぶん、このワザのダメージは小さくなる。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558696,
			},
		},
	],

	evolveFrom: {
		ja: "アローラニャース",
	},

	retreat: 1,
	rarity: "Uncommon",
	dexId: [53],
};

export default card;
