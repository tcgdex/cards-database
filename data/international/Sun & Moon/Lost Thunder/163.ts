import { Card } from 'models/database/card'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		'en-us': "Pikipek",
		'fr-fr': "Picassaut",
		'es-es': "Pikipek",
		'it-it': "Pikipek",
		'pt-br': "Pikipek",
		'de-de': "Peppeck"
	},

	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		731,
	],

	hp: 50,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Peck Off",
				'fr-fr': "Picpic Piqueur",
				'es-es': "Picotear",
				'it-it': "Sbeccata",
				'pt-br': "Arrancar com Bico",
				'de-de': "Lospicken"
			},
			effect: {
				'en-us': "Before doing damage, discard all Pokémon Tool cards from your opponent’s Active Pokémon.",
				'fr-fr': "Avant d’infliger des dégâts, défaussez toutes les cartes Outil Pokémon du Pokémon Actif de votre adversaire.",
				'es-es': "Antes de infligir daño, descarta todas las cartas de Herramienta Pokémon del Pokémon Activo de tu rival.",
				'it-it': "Prima di infliggere danni, scarta tutte le carte Oggetto Pokémon assegnate al Pokémon attivo del tuo avversario.",
				'pt-br': "Antes de causar dano, descarte todas as cartas de Ferramenta Pokémon do Pokémon Ativo do seu oponente.",
				'de-de': "Bevor du Schaden zufügst, lege alle Pokémon-Ausrüstungen vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "This Pokémon feeds on berries, whose leftover seeds become the ammunition for attacks it fires off from its mouth.",
	},

	thirdParty: {
		cardmarket: 365799,
		tcgplayer: 178986
	}
}

export default card
