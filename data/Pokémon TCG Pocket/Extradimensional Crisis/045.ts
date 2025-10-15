import { Card } from "../../../interfaces"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		en: "Naganadel",
		fr: "Mandrillon"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],

	evolveFrom: {
		en: "Poipole"
	},

	description: {
		en: "It stores hundreds of liters of poisonous liquid\ninside its body. It is one of the organisms known\nas UBs.",
		fr: "Son corps contient des hectolitres de poison. Il fait partie de ces créatures que l'on nomme « Ultra-Chimères »."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Electro House",
			fr: "Acid House"
		},

		damage: 40,
		cost: ["Darkness"],

		effect: {
			en: "Your opponent's Active Pokémon is now Poisoned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2
}

export default card