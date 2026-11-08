import { Card } from 'models/database/card'
import Set from '../Flashfire'

const card: Card = {
	name: {
		'en-us': "Pidgey",
		'fr-fr': "Roucool",
		'es-es': "Pidgey",
		'it-it': "Pidgey",
		'pt-br': "Pidgey",
		'de-de': "Taubsi"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		16,
	],

	hp: 60,

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
				'en-us': "Before doing damage, discard all Pokémon Tool cards attached to your opponent's Active Pokémon.",
				'fr-fr': "Avant d'infliger des dégâts, défaussez toutes les cartes Outil Pokémon attachées au Pokémon Actif de votre adversaire.",
				'es-es': "Antes de infligir daño, descarta todas las cartas de Herramienta Pokémon unidas al Pokémon Activo de tu rival.",
				'it-it': "Prima di infliggere il danno, scarta tutte le carte Oggetto Pokémon assegnate al Pokémon attivo del tuo avversario.",
				'pt-br': "Antes de causar danos, descarte todos os cards de Ferramenta Pokémon ligados ao Pokémon Ativo do seu oponente.",
				'de-de': "Lege, bevor du Schaden zufügst, alle an das Aktive Pokémon deines Gegners angelegten Pokémon-Ausrüstungen auf den Ablagestapel deines Gegners."
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
		'en-us': "A common sight in forests and woods. It flaps its wings at ground level to kick up blinding sand.",
	},

	thirdParty: {
		cardmarket: 281558,
		tcgplayer: 91212
	}
}

export default card
