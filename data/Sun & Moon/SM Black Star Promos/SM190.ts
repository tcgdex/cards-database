import { Card } from '../../../interfaces'
import Set from '../SM Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		en: "Detective Pikachu",
		fr: "Détective Pikachu",
		es: "Detective Pikachu",
		it: "Detective Pikachu",
		pt: "Detective Pikachu",
		de: "Meisterdetektiv Pikachu"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],

	attacks: [{
		name: {
			en: "Coffee Break",
			fr: "Pause Café",
			es: "Hora del Café",
			it: "Pausa Caffè",
			pt: "Hora do Cafezinho",
			de: "Kaffeepause"
		},

		effect: {
			en: "Heal 30 damage from this Pokémon.",
			fr: "Soignez 30 dégâts à ce Pokémon.",
			es: "Cura 30 puntos de daño a este Pokémon.",
			it: "Cura questo Pokémon da 30 danni.",
			pt: "Cure 30 pontos de dano deste Pokémon.",
			de: "Heile 30 Schadenspunkte bei diesem Pokémon."
		},

		cost: ["Colorless"]
	}, {
		name: {
			en: "Corkscrew Punch",
			fr: "Poing Tire-Bouchon",
			es: "Puño Tirabuzón",
			it: "Pugno Rotante",
			pt: "Soco Saca-rolha",
			de: "Korkenzieherhieb"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	resistances: [{
		type: "Metal",
		value: "-20"
	}],

	retreat: 2
}

export default card