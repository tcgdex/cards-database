import { Card } from 'models/database/card'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		'en-us': "Maractus",
		'fr-fr': "Maracachi",
		'es-es': "Maractus",
		'it-it': "Maractus",
		'pt-br': "Maractus",
		'de-de': "Maracamba"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		556,
	],

	hp: 110,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Zzzt",
				'fr-fr': "Bzzz",
				'es-es': "Bzzz",
				'it-it': "Bzzz",
				'pt-br': "Bzzz",
				'de-de': "Piiieks"
			},

			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Powerful Needles",
				'fr-fr': "Piquants Puissants",
				'es-es': "Espinas Poderosas",
				'it-it': "Spine Poderose",
				'pt-br': "Espinhos Poderosos",
				'de-de': "Kräftige Stacheln"
			},
			effect: {
				'en-us': "Flip a coin for each Energy attached to this Pokémon. This attack does 60 damage for each heads.",
				'fr-fr': "Lancez une pièce pour chaque Énergie attachée à ce Pokémon. Cette attaque inflige 60 dégâts pour chaque côté face.",
				'es-es': "Lanza 1 moneda por cada Energía unida a este Pokémon. Este ataque hace 60 puntos de daño por cada cara.",
				'it-it': "Lancia una moneta per ogni Energia assegnata a questo Pokémon. Questo attacco infligge 60 danni ogni volta che esce testa.",
				'pt-br': "Jogue 1 moeda para cada Energia ligada a este Pokémon. Este ataque causa 60 pontos de dano para cada cara.",
				'de-de': "Wirf für jede an dieses Pokémon angelegte Energie 1 Münze. Diese Attacke fügt 60 Schadenspunkte pro Kopf zu."
			},
			damage: "60×",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	description: {
		'en-us': "With noises that could be mistaken for the rattles of maracas, it creates an upbeat rhythm, startling bird Pokémon and making them fly off in a hurry."
	},

	thirdParty: {
		cardmarket: 436214,
		tcgplayer: 208274
	}
}

export default card
