import { Card } from 'models/database/card'
import Set from '../Shining Fates Shiny Vault'

const card: Card = {
	dexId: [880],
	set: Set,

	name: {
		'fr-fr': "Galvagon",
		'en-us': "Dracozolt",
		'es-es': "Dracozolt",
		'it-it': "Dracozolt",
		'pt-br': "Dracozolt",
		'de-de': "Lectragon"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 160,
	types: ["Lightning"],

	evolveFrom: {
		'fr-fr': "Fossile Rare",
		'en-us': "Rare Fossil"
	},

	attacks: [{
		name: {
			'fr-fr': "Amplificateur",
			'en-us': "Amping Up",
			'es-es': "Amplificación",
			'it-it': "Incremento",
			'pt-br': "Amplificando",
			'de-de': "Verstärker"
		},

		effect: {
			'fr-fr': "Pendant votre prochain tour, l'attaque Amplificateur de ce Pokémon inflige 90 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
			'en-us': "During your next turn, this Pokémon's Amping Up attack does 90 more damage (before applying Weakness and Resistance).",
			'es-es': "Durante tu próximo turno, el ataque Amplificación de este Pokémon hace 90 puntos de daño más (antes de aplicar Debilidad y Resistencia).",
			'it-it': "Durante il tuo prossimo turno, l'attacco Incremento di questo Pokémon infligge 90 danni in più, prima di aver applicato debolezza e resistenza.",
			'pt-br': "Durante o seu próximo turno, o ataque Amplificando deste Pokémon causará 90 pontos de dano a mais (antes de aplicar Fraqueza e Resistência).",
			'de-de': "Während deines nächsten Zuges fügt die Attacke Verstärker dieses Pokémon 90 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden)."
		},

		damage: 30,
		cost: ["Lightning"]
	}, {
		name: {
			'fr-fr': "Giga Impact",
			'en-us': "Giga Impact",
			'es-es': "Gigaimpacto",
			'it-it': "Gigaimpatto",
			'pt-br': "Gigaimpacto",
			'de-de': "Gigastoß"
		},

		effect: {
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			'en-us': "During your next turn, this Pokémon can't attack.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede atacar.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
		},

		damage: 200,
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "D",
	stage: "Stage1",

	description: {
		'en-us': "In ancient times, it was unbeatable thanks to its powerful lower body, but it went extinct anyway after it depleted all its plant-based food sources."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 539638,
				tcgplayer: 232404
			}
		},
	],
}

export default card
