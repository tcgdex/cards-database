import { Card } from "models/database/card"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Pyukumuku",
		'fr-fr': "Concombaffe"
	},

	illustrator: "Nisota Niso",
	rarity: "One Shiny",
	category: "Pokemon",

	dexId: [771],
	hp: 60,
	types: ["Water"],

	description: {
		'en-us': "It lives in warm, shallow waters. If it encounters a\nfoe, it will spit out its internal organs as a means\nto punch them.",
		'fr-fr': "Il vit dans les eaux chaudes des hauts-fonds. S'il croise un ennemi, il l'attaque en lui crachant ses organes internes au visage."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Innards Out",
			'fr-fr': "Expuls'Organes"
		},

		effect: {
			'en-us': "If this Pokémon is in the Active Spot and is Knocked Out by damage from an attack from your opponent's Pokémon, do 50 damage to the Attacking Pokémon.",
			'fr-fr': "Si ce Pokémon est sur le Poste Actif et qu'il est mis K.O. par les dégâts d'une attaque d'un Pokémon de votre adversaire, le Pokémon Attaquant subit 50 dégâts."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Sprinkle Water",
			'fr-fr': "Eau Aspergeante"
		},

		damage: 20,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card