import { Card } from "models/database/card"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Bulbasaur",
		'fr-fr': "Bulbizarre",
		'de-de': "Bisasam",
		'it-it': "Bulbasaur",
		'es-es': "Bulbasaur",
		'pt-br': "Bulbasaur",
		'es-mx': "Bulbasaur"
	},

	illustrator: "Saboteri",
	rarity: "Promo",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],
	stage: "Basic",
	dexId: [1],

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Leech Seed",
			'fr-fr': "Vampigraine",
			'de-de': "Egelsamen",
			'it-it': "Parassiseme",
			'es-es': "Drenadoras",
			'pt-br': "Semente Sanguessuga",
			'es-mx': "Drenadoras"
		},

		damage: 10,

		effect: {
			'en-us': "Heal 10 damage from this Pokémon.",
			'fr-fr': "Soignez 10 dégâts de ce Pokémon.",
			'de-de': "Heile 10 Schadenspunkte bei diesem Pokémon.",
			'it-it': "Cura questo Pokémon da 10 danni.",
			'es-es': "Cura 10 puntos de daño a este Pokémon.",
			'pt-br': "Cure 10 pontos de dano deste Pokémon.",
			'es-mx': "Cura 10 puntos de daño a este Pokémon."
		}
	}],

	retreat: 2,
	regulationMark: "J",

	weaknesses: [{
		type: "Fire",
		value: "x2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 875186,
				tcgplayer: 684461
			}
		},
	],
}

export default card
