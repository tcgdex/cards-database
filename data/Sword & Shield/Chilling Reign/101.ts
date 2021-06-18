import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Qwilfish",
		fr: "Qwilfish"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Darkness"],

	abilities: [{
		type: "Ability",

		name: {
			en: "Bursting Needles",
			fr: "Piquants Éclatants"
		},

		effect: {
			en: "If this Pokémon is in the Active Spot and is Knocked Out by damage from an attack from your opponent’s Pokémon, put 6 damage counters on the Attacking Pokémon.",
			fr: "Si ce Pokémon est sur le Poste Actif et est mis K.O. par les dégâts d’une attaque d’un Pokémon de votre adversaire, placez 6 marqueurs de dégâts sur le Pokémon Attaquant."
		}
	}],

	attacks: [{
		name: {
			en: "Poison Jab",
			fr: "Direct Toxik"
		},

		effect: {
			en: "Your opponent’s Active Pokémon is now Poisoned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné."
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card