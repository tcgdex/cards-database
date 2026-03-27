import { Card } from "../../../interfaces";
import Set from "../M1L";

const card: Card = {
	set: Set,
	name: {
		ja: "エースバーン",
	},

	illustrator: "REND",
	category: "Pokemon",
	hp: 160,
	types: ["Fire"],

	description: {
		ja: "",
	},

	stage: "Stage2",

	evolveFrom: {
		ja: "ラビフット",
	},

	abilities: [{"type": "Ability", "name": {"ja": "Explosiveness"}, "effect": {"ja": "If this Pokémon is in your hand when you are setting up to play, you may put it face down as your Active Pokémon."}}],

	attacks: [{"name": {"ja": "Flare Turbo"}, "damage": 50, "cost": ["Colorless"], "effect": {"ja": "Search your deck for up to 3 Basic Energy and attach them to your Benched Pokemon in any way you like. Shuffle your deck."}}],

	weaknesses: [{"type": "Water", "value": "x2"}],
	resistances: [],

	variants: [{"type": "holo"}],

	retreat: 0,
	regulationMark: "I",
	rarity: "Rare",
	dexId: [815],
};

export default card;
