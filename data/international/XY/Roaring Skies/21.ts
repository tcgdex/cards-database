import { Card } from 'models/database/card'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		'en-us': "Voltorb",
		'fr-fr': "Voltorbe",
		'es-es': "Voltorb",
		'it-it': "Voltorb",
		'pt-br': "Voltorb",
		'de-de': "Voltobal"
	},

	illustrator: "Suwama Chiaki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		100,
	],

	hp: 60,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Thunder Wave",
				'fr-fr': "Cage-Éclair",
				'es-es': "Onda Trueno",
				'it-it': "Tuononda",
				'pt-br': "Onda de Trovão",
				'de-de': "Donnerwelle"
			},
			effect: {
				'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
				'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
				'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
				'pt-br': "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente será Paralisado.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" ist das Aktive Pokémon deines Gegners jetzt paralysiert."
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Big Explosion",
				'fr-fr': "Grosse Explosion",
				'es-es': "Gran Explosión",
				'it-it': "Grande Esplosione",
				'pt-br': "Grande Explosão",
				'de-de': "Große Explosion"
			},
			effect: {
				'en-us': "This Pokémon does 60 damage to itself.",
				'fr-fr': "Ce Pokémon s'inflige 60 dégâts.",
				'es-es': "Este Pokémon se hace 60 puntos de daño a sí mismo.",
				'it-it': "Questo Pokémon infligge 60 danni a se stesso.",
				'pt-br': "Este Pokémon causa 60 de danos a ele mesmo.",
				'de-de': "Dieses Pokémon fügt sich selbst 60 Schadenspunkte zu."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Usually found in power plants. Easily mistaken for a Poké Ball, it has zapped many people.",
	},

	thirdParty: {
		cardmarket: 282689,
		tcgplayer: 98057
	}
}

export default card
