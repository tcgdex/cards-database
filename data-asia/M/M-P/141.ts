import { Card } from "../../../interfaces";
import Set from "../M-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ミネズミ",
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "かんしのめ" },
			effect: {
				ja: "このポケモンがいるかぎり、おたがいのポケモン全員にのっているダメカンは、別のポケモンにのせ替えられない。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "かみつく" },
			damage: 10,
			cost: ["Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 897860,
			},
		},
	],

	retreat: 1,
	regulationMark: "J",
	rarity: "Promo",
	dexId: [504],
};

export default card;
