import { Card } from "../../../interfaces";
import Set from "../SM8b";

const card: Card = {
	set: Set,
	name: {
		ja: "コスモッグ",
	},

	illustrator: "sui",
	category: "Pokemon",
	hp: 50,
	types: ["Psychic"],

	description: {
		ja: "大昔は 星の子 という 名で 呼ばれた。 別世界の ポケモンと いわれているが 詳しくは 不明。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "コスモガード" },
			effect: {
				ja: "このポケモンは、ベンチにいるかぎり、ワザのダメージを受けない。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "つぶやく" },
			damage: 10,
			cost: ["Colorless"],
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 550711,
			},
		},
	],

	retreat: 1,
	rarity: "None",
	dexId: [789],
};

export default card;
