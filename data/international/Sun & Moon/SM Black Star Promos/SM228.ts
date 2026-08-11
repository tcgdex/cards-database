import { Card } from 'models/database/card'
import Set from '../SM Black Star Promos'

const card: Card = {
	dexId: [150],
	set: Set,

	name: {
		'en-us': "Armored Mewtwo",
		'fr-fr': "Armored Mewtwo",
		'es-es': "Armored Mewtwo",
		'it-it': "Armored Mewtwo",
		'pt-br': "Armored Mewtwo",
		'de-de': "Armored Mewtwo"
	},

	illustrator: "2019 Pikachu Project",
	rarity: "Promo",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	attacks: [{
		name: {
			'en-us': "Psychic Raid",
			'fr-fr': "Raid Psy",
			'es-es': "Incursión Psíquica",
			'it-it': "Raid Psichico",
			'pt-br': "Incursão Psíquica",
			'de-de': "Psycho-Raubzug"
		},

		damage: 130,

		effect: {
			'en-us': "This Pokémon can’t attack during your next turn.",
			'fr-fr': "Ce Pokémon ne peut pas attaquer pendant votre prochain tour.",
			'es-es': "Este Pokémon no puede atacar durante tu próximo turno.",
			'it-it': "Questo Pokémon non può attaccare durante il tuo prossimo turno.",
			'pt-br': "Este Pokémon não poderá atacar durante a sua próxima vez de jogar.",
			'de-de': "Dieses Pokémon kann während deines nächsten Zuges nicht angreifen."
		},

		cost: ["Psychic", "Psychic", "Psychic"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 3,

	description: {
		'en-us': "Mewtwo was on a rampage searching for meaning to its existence in this world when Giovanni suppressed and controlled its power.",
	},
}

export default card
