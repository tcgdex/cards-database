import { Card } from "../../../interfaces"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		en: "Dratini",
		fr: "Minidraco"
	},

	illustrator: "Naoyo Kimura",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Dragon"],

	description: {
		en: "It sheds many layers of skin as it grows larger.\nDuring this process, it is protected by a rapid\nwaterfall.",
		fr: "Ce Pokémon grandit en muant à répétition. Lors de ce processus, il s'abrite derrière une puissante cascade."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Beat",
			fr: "Bataille"
		},

		damage: 20,
		cost: ["Colorless"]
	}],

	retreat: 1
}

export default card