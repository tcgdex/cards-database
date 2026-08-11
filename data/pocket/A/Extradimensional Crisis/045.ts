import { Card } from "models/database/card"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Naganadel",
		'fr-fr': "Mandrillon"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [804],
	hp: 100,
	types: ["Darkness"],

	evolveFrom: {
		'en-us': "Poipole"
	},

	description: {
		'en-us': "It stores hundreds of liters of poisonous liquid\ninside its body. It is one of the organisms known\nas UBs.",
		'fr-fr': "Son corps contient des hectolitres de poison. Il fait partie de ces créatures que l'on nomme « Ultra-Chimères »."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Electro House",
			'fr-fr': "Acid House"
		},

		damage: 40,
		cost: ["Darkness"],

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Poisoned.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Empoisonné."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2
}

export default card