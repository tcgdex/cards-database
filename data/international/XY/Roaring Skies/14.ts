import { Card } from 'models/database/card'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		'en-us': "Fletchinder",
		'fr-fr': "Braisillon",
		'es-es': "Fletchinder",
		'it-it': "Fletchinder",
		'pt-br': "Fletchinder",
		'de-de': "Dartignis"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		662,
	],

	hp: 70,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Fletchling",
		'fr-fr': "Passerouge",
		'es-es': "Fletchling",
		'it-it': "Fletchling",
		'pt-br': "Fletchling",
		'de-de': "Dartiri"
	},

	stage: "Stage1",

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
			type: "Water",
			value: "×2"
		},
	],

	retreat: 0,

	description: {
		'en-us': "The hotter the flame sac on its belly, the faster it can fly, but it takes some time to get the fire going.",
	},

	thirdParty: {
		cardmarket: 282682,
		tcgplayer: 98050
	}
}

export default card
