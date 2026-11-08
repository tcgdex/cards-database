import { Card } from 'models/database/card'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		'en-us': "Rotom",
		'fr-fr': "Motisma",
		'es-es': "Rotom",
		'it-it': "Rotom",
		'pt-br': "Rotom",
		'de-de': "Rotom"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		479,
	],

	hp: 70,

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
				'en-us': "Energy Extract",
				'fr-fr': "Extraction d'Énergie",
				'es-es': "Extracción de Energía",
				'it-it': "Estrazione Energia",
				'pt-br': "Extrair Energia",
				'de-de': "Energieanziehung"
			},
			effect: {
				'en-us': "Search your deck for a basic Energy card and attach it to this Pokémon. Shuffle your deck afterward.",
				'fr-fr': "Cherchez une carte Énergie de base dans votre deck et attachez-la à ce Pokémon. Mélangez ensuite votre deck.",
				'es-es': "Busca en tu baraja 1 carta de Energía Básica y únela a este Pokémon. Baraja las cartas de tu baraja después.",
				'it-it': "Cerca nel tuo mazzo una carta Energia base e assegnala a questo Pokémon. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Procure em seu baralho um card de Energia básica e ligue-o a este Pokémon. Em seguida, embaralhe seus cards.",
				'de-de': "Durchsuche dein Deck nach 1 Basis-Energiekarte und lege sie an dieses Pokémon an. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Plasmagic",
				'fr-fr': "Plasmagie",
				'es-es': "Plasmágico",
				'it-it': "Plasmatrucco",
				'pt-br': "Magiplasma",
				'de-de': "Plasmagie"
			},
			effect: {
				'en-us': "Move 2 damage counters from each of your Pokémon to your opponent's Active Pokémon.",
				'fr-fr': "Déplacez 2 marqueurs de dégâts de chacun de vos Pokémon vers le Pokémon Actif de votre adversaire.",
				'es-es': "Mueve 2 contadores de daño de cada uno de tus Pokémon al Pokémon Activo de tu rival.",
				'it-it': "Sposta due segnalini danno da ciascuno dei tuoi Pokémon al Pokémon attivo del tuo avversario.",
				'pt-br': "Mova 2 contadores de danos de cada um dos seus Pokémon ao Pokémon Ativo do seu oponente.",
				'de-de': "Verschiebe 2 Schadensmarken von jedem deiner Pokémon auf das Aktive Pokémon deines Gegners."
			},

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
		'en-us': "Its body is composed of plasma. It is known to infiltrate electronic devices and wreak havoc.",
	},

	thirdParty: {
		cardmarket: 289850,
		tcgplayer: 117786
	}
}

export default card
