import { Card } from 'models/database/card'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		'en-us': "Kecleon",
		'fr-fr': "Kecleon",
		'es-es': "Kecleon",
		'it-it': "Kecleon",
		'pt-br': "Kecleon",
		'de-de': "Kecleon"
	},

	illustrator: "OOYAMA",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		352,
	],

	hp: 80,

	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Unit Color 2",
				'fr-fr': "Couleur Unitaire 2",
				'es-es': "Color Unidad 2",
				'it-it': "Unione Colore 2",
				'pt-br': "Cor Unitária 2",
				'de-de': "Aggregat-Farbe 2"
			},
			effect: {
				'en-us': "As long as this Pokémon has Unit Energy LightningPsychicMetal attached to it, it is a Lightning, Psychic, and Metal Pokémon.",
				'fr-fr': "Tant que de l’Énergie Unitaire LightningPsychicMetal est attachée à ce Pokémon, c’est un Pokémon Lightning, Psychic et Metal.",
				'es-es': "Mientras este Pokémon tenga alguna carta de Energía Unidad LightningPsychicMetal unida a él, es un Pokémon Lightning, Psychic y Metal.",
				'it-it': "Fintanto che ha delle carte Energia Unione LightningPsychicMetal assegnate, questo Pokémon è di tipo Lightning, Psychic e Metal.",
				'pt-br': "Enquanto este Pokémon tiver Energia Unitária LightningPsychicMetal ligada a ele, será um Pokémon Lightning, Psychic e Metal.",
				'de-de': "Solang an dieses Pokémon Aggregat-Energie LightningPsychicMetal angelegt ist, ist es ein Lightning-, Psychic- und Metal-Pokémon."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Slash",
				'fr-fr': "Tranche",
				'es-es': "Cuchillada",
				'it-it': "Lacerazione",
				'pt-br': "Talho",
				'de-de': "Schlitzer"
			},

			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It changes its shading to match its surroundings so it can sneak up on prey. Only its belly patterns stay fixed.",
	},

	thirdParty: {
		cardmarket: 361361,
		tcgplayer: 170983
	}
}

export default card
