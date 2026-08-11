import { Card } from 'models/database/card'
import Set from '../Shining Fates'

const card: Card = {
	dexId: [893],
	set: Set,

	name: {
		'fr-fr': "Zarude",
		'en-us': "Zarude",
		'es-es': "Zarude",
		'it-it': "Zarude",
		'pt-br': "Zarude",
		'de-de': "Zarude"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	attacks: [{
		name: {
			'fr-fr': "Lianes Sangsues",
			'en-us': "Suctioning Vines",
			'es-es': "Lianas Succionadoras",
			'it-it': "Liane Aspiranti",
			'pt-br': "Vinhas de Sucção",
			'de-de': "Saugranken"
		},

		effect: {
			'fr-fr': "Soignez 30 dégâts de ce Pokémon.",
			'en-us': "Heal 30 damage from this Pokémon.",
			'es-es': "Cura 30 puntos de daño a este Pokémon.",
			'it-it': "Cura questo Pokémon da 30 danni.",
			'pt-br': "Cure 30 pontos de dano deste Pokémon.",
			'de-de': "Heile 30 Schadenspunkte bei diesem Pokémon."
		},

		damage: 30,
		cost: ["Grass", "Colorless"]
	}, {
		name: {
			'fr-fr': "Courroux de la Jungle",
			'en-us': "Jungle Blast",
			'es-es': "Explosión Selvática",
			'it-it': "Giunglascoppio",
			'pt-br': "Explosão da Selva",
			'de-de': "Dschungelexplosion"
		},

		damage: 110,
		cost: ["Grass", "Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E",


	stage: "Basic",

	description: {
		'en-us': "Once the vines on Zarude's body tear off, they become nutrients in the soil. This helps the plants of the forest grow."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 539103,
				tcgplayer: 232398
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 539103,
				tcgplayer: 232398
			}
		},
	],
}

export default card
