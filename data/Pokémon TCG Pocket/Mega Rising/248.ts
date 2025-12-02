import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Delcatty"
	},

	illustrator: "MINAMINAMI Take",
	rarity: "One Star",
	category: "Pokemon",

	dexId: [301],
	hp: 80,
	types: ["Colorless"],

	evolveFrom: {
		en: "Skitty"
	},

	description: {
		en: "It is highly popular among female Trainers for its\nsublime fur. It does not keep a nest."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Search for Friends"
		},

		effect: {
			en: "Once during your turn, when you play this Pokémon from your hand to evolve 1 of your Pokémon, you may put a Supporter card from your discard pile into your hand."
		}
	}],

	attacks: [{
		name: {
			en: "Cat Kick"
		},

		damage: 40,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["mega-gyarados"]
}

export default card