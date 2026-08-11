import { Card } from 'models/database/card'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		'en-us': "Relicanth",
		'fr-fr': "Relicanth",
		'es-es': "Relicanth",
		'it-it': "Relicanth",
		'pt-br': "Relicanth",
		'de-de': "Relicanth"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		369,
	],

	hp: 90,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Deep Sea Search",
				'fr-fr': "Recherche Abyssale",
				'es-es': "Búsqueda en Alta Mar",
				'it-it': "Sonda Abissale",
				'pt-br': "Busca em Mar Profundo",
				'de-de': "Tiefseesuche"
			},
			effect: {
				'en-us': "Search your deck for up to 2 Pokémon Tool cards, reveal them, and put them into your hand. Shuffle your deck afterward.",
				'fr-fr': "Cherchez jusqu'à 2 cartes Outil Pokémon dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
				'es-es': "Busca en tu baraja hasta 2 cartas de Herramienta Pokémon, enséñalas y ponlas en tu mano. Baraja las cartas de tu baraja después.",
				'it-it': "Cerca nel tuo mazzo fino a due carte Oggetto Pokémon, mostrale e aggiungile alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Procure no seu baralho até 2 cards de Ferramenta Pokémon, revele-os e coloque-os na sua mão. Em seguida, embaralhe seus cards.",
				'de-de': "Durchsuche dein Deck nach bis zu 2 Pokémon-Ausrüstungen, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Take Down",
				'fr-fr': "Bélier",
				'es-es': "Derribo",
				'it-it': "Riduttore",
				'pt-br': "Desmantelar",
				'de-de': "Bodycheck"
			},
			effect: {
				'en-us': "This Pokémon does 10 damage to itself.",
				'fr-fr': "Ce Pokémon s'inflige 10 dégâts.",
				'es-es': "Este Pokémon se hace 10 puntos de daño a sí mismo.",
				'it-it': "Questo Pokémon infligge 10 danni a se stesso.",
				'pt-br': "Este Pokémon causa 10 de danos a ele mesmo.",
				'de-de': "Dieses Pokémon fügt sich selbst 10 Schadenspunkte zu."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "A rare Pokémon discovered during a deep-sea exploration. It has not changed in over 100 million years.",
	},

	thirdParty: {
		cardmarket: 284204,
		tcgplayer: 101444
	}
}

export default card
