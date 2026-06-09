import { Card } from "../../../interfaces"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		en: "Pyukumuku",
		fr: "Concombaffe"
	},

	illustrator: "Nisota Niso",
	rarity: "One Shiny",
	category: "Pokemon",

	dexId: [771],
	hp: 60,
	types: ["Water"],

	description: {
		en: "It lives in warm, shallow waters. If it encounters a\nfoe, it will spit out its internal organs as a means\nto punch them.",
		fr: "Il vit dans les eaux chaudes des hauts-fonds. S'il croise un ennemi, il l'attaque en lui crachant ses organes internes au visage."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Innards Out",
			fr: "Expuls'Organes"
		},

		effect: {
			en: "If this Pokémon is in the Active Spot and is Knocked Out by damage from an attack from your opponent's Pokémon, do 50 damage to the Attacking Pokémon.",
			fr: "Si ce Pokémon est sur le Poste Actif et qu'il est mis K.O. par les dégâts d'une attaque d'un Pokémon de votre adversaire, le Pokémon Attaquant subit 50 dégâts."
		}
	}],

	attacks: [{
		name: {
			en: "Sprinkle Water",
			fr: "Eau Aspergeante"
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