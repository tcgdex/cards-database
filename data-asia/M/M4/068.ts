import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "ミネズミ",
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		ja: "",
	},

	stage: "Basic",

	abilities: [{"type": "Ability", "name": {"ja": "かんしのめ"}, "effect": {"ja": "このポケモンがいるかぎり、おたがいのポケモン全員にのっているダメカンは、別のポケモンにのせ替えられない。"}}],

	attacks: [{"name": {"ja": "かみつく"}, "cost": ["Colorless"], "damage": 10}],

	weaknesses: [{"type": "Fighting", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [504],
};

export default card;
