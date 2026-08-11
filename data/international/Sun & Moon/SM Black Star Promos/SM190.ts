import { Card } from 'models/database/card'
import Set from '../SM Black Star Promos'

const card: Card = {
	dexId: [25],
	set: Set,

	name: {
		'en-us': "Detective Pikachu",
		'fr-fr': "Détective Pikachu",
		'es-es': "Detective Pikachu",
		'it-it': "Detective Pikachu",
		'pt-br': "Detective Pikachu",
		'de-de': "Meisterdetektiv Pikachu"
	},

	illustrator: "Framestore",
	rarity: "Promo",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],

	attacks: [{
		name: {
			'en-us': "Coffee Break",
			'fr-fr': "Pause Café",
			'es-es': "Hora del Café",
			'it-it': "Pausa Caffè",
			'pt-br': "Hora do Cafezinho",
			'de-de': "Kaffeepause"
		},

		effect: {
			'en-us': "Heal 30 damage from this Pokémon.",
			'fr-fr': "Soignez 30 dégâts à ce Pokémon.",
			'es-es': "Cura 30 puntos de daño a este Pokémon.",
			'it-it': "Cura questo Pokémon da 30 danni.",
			'pt-br': "Cure 30 pontos de dano deste Pokémon.",
			'de-de': "Heile 30 Schadenspunkte bei diesem Pokémon."
		},

		cost: ["Colorless"]
	}, {
		name: {
			'en-us': "Corkscrew Punch",
			'fr-fr': "Poing Tire-Bouchon",
			'es-es': "Puño Tirabuzón",
			'it-it': "Pugno Rotante",
			'pt-br': "Soco Saca-rolha",
			'de-de': "Korkenzieherhieb"
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

	retreat: 2,

	description: {
		'en-us': "He was the partner of Tim's father, Harry, who has gone missing. This Pikachu loves the dark coffee at the Hi-Hat Cafe.",
	},
}

export default card
