import { Card } from "../../../interfaces";
import Set from "../M1L";

const card: Card = {
	set: Set,
	name: {
		ja: "メガルカリオex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 340,
	types: ["Fighting"],

	description: {
		ja: "",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "オーラジャブ"}, "damage": 130, "cost": ["Fighting"], "effect": {"ja": "Attach up to 3 Basic  Energy from your discard pile to your Benched Pokémon in any way yuo like."}}, {"name": {"ja": "メガブレイブ"}, "damage": 270, "cost": ["Fighting", "Fighting"], "effect": {"ja": "During your next turn, this Pokémon can't use Mega Brave"}}],

	weaknesses: [{"type": "Psychic", "value": "x2"}],
	resistances: [],

	variants: [{"type": "holo"}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Mega Hyper Rare",
	dexId: [448],
	suffix: "EX",
};

export default card;
