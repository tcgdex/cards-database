import { Card } from 'models/database/card'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		'en-us': "Gogoat",
		'fr-fr': "Chevroum",
		'es-es': "Gogoat",
		'it-it': "Gogoat",
		'pt-br': "Gogoat",
		'de-de': "Chevrumm"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		673,
	],

	hp: 120,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Skiddo",
		'fr-fr': "Cabriolaine",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Milk Drink",
				'fr-fr': "Lait à Boire",
				'es-es': "Batido",
				'it-it': "Buonlatte",
				'pt-br': "Leite de Cura",
				'de-de': "Milchgetränk"
			},
			effect: {
				'en-us': "Flip 2 coins. For each heads, heal 40 damage from this Pokémon.",
				'fr-fr': "Lancez 2 pièces. Pour chaque côté face, soignez 40 dégâts à ce Pokémon.",
				'es-es': "Lanza 2 monedas. Por cada cara, cura 40 puntos de daño a este Pokémon.",
				'it-it': "Lancia due volte una moneta. Ogni volta che esce testa, cura questo Pokémon da 40 danni.",
				'pt-br': "Jogue 2 moedas. Para cada cara, cure 40 pontos de dano deste Pokémon.",
				'de-de': "Wirf 2 Münzen. Heile pro Kopf 40 Schadenspunkte bei diesem Pokémon."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Double-Edge",
				'fr-fr': "Damoclès",
				'es-es': "Doble Filo",
				'it-it': "Sdoppiatore",
				'pt-br': "Faca de Dois Gumes",
				'de-de': "Risikotackle"
			},
			effect: {
				'en-us': "This Pokémon does 30 damage to itself.",
				'fr-fr': "Ce Pokémon s’inflige 30 dégâts.",
				'es-es': "Este Pokémon se hace 30 puntos de daño a sí mismo.",
				'it-it': "Questo Pokémon infligge 30 danni a se stesso.",
				'pt-br': "Este Pokémon causa 30 pontos de dano a si mesmo.",
				'de-de': "Dieses Pokémon fügt sich selbst 30 Schadenspunkte zu."
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "They inhabit mountainous regions. The leader of the herd is decided by a battle of clashing horns.",
	},

	thirdParty: {
		cardmarket: 355531,
		tcgplayer: 165657
	}
}

export default card
