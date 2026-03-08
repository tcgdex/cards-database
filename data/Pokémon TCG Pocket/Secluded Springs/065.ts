import { Card } from "../../../interfaces"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		en: "Zangoose",
		fr: "Mangriff"
	},

	illustrator: "Misa Tsutsui",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [335],
	hp: 80,
	types: ["Colorless"],

	description: {
		en: "It's Seviper's archrival. To threaten those\nit encounters, it fans out the claws on its\nfront paws.",
		fr: "Mangriff est l'ennemi juré de Séviper. Quand il le croise, il sort instantanément ses griffes pour l'intimider."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Counterattack",
			fr: "Contre-Attaque"
		},

		effect: {
			en: "If this Pokémon is in the Active Spot and is damaged by an attack from your opponent's Pokémon, do 20 damage to the Attacking Pokémon.",
			fr: "Si ce Pokémon est sur le Poste Actif et subit les dégâts d'une attaque d'un Pokémon de votre adversaire, le Pokémon Attaquant subit 20 dégâts."
		}
	}],

	attacks: [{
		name: {
			en: "Slash",
			fr: "Tranche"
		},

		damage: 50,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card