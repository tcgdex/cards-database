import { Card } from 'models/database/card'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		'en-us': "Cinccino",
		'fr-fr': "Pashmilla",
		'es-es': "Cinccino",
		'it-it': "Cinccino",
		'pt-br': "Cinccino",
		'de-de': "Chillabell"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		573,
	],

	hp: 90,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Minccino",
		'fr-fr': "Chinchidou",
		'es-es': "Minccino",
		'it-it': "Minccino",
		'pt-br': "Minccino",
		'de-de': "Picochilla"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Sweeping Cure",
				'fr-fr': "Guérison Extensive",
				'es-es': "Barrido Curación",
				'it-it': "Curarapida",
				'pt-br': "Varrida da Cura",
				'de-de': "Fegende Heilung"
			},
			effect: {
				'en-us': "Heal 90 damage from 1 of your Benched Pokémon.",
				'fr-fr': "Soignez 90 dégâts à l'un de vos Pokémon de Banc.",
				'es-es': "Cura 90 puntos de daño a 1 de tus Pokémon en Banca.",
				'it-it': "Cura uno dei tuoi Pokémon in panchina da 90 danni.",
				'pt-br': "Cure 90 de danos de 1 dos seus Pokémon no Banco.",
				'de-de': "Heile 90 Schadenspunkte bei 1 Pokémon auf deiner Bank."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Knock Away",
				'fr-fr': "Asticotage",
				'es-es': "Derribar",
				'it-it': "Scaraventa",
				'pt-br': "Jogar Longe",
				'de-de': "Zurückschlagen"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 30 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires.",
				'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 30 puntos de daño más.",
				'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più.",
				'pt-br': "Jogue uma moeda. Se sair cara, este ataque causará 30 de danos adicionais.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 30 weitere Schadenspunkte zu."
			},
			damage: "30+",

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
		'en-us': "Cinccino's body is coated in a special oil that helps it deflect attacks, such as punches.",
	},

	thirdParty: {
		cardmarket: 290539,
		tcgplayer: 117862
	}
}

export default card
