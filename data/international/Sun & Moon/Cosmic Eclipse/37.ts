import { Card } from 'models/database/card'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		'en-us': "Pyroar",
		'fr-fr': "Némélios",
		'es-es': "Pyroar",
		'it-it': "Pyroar",
		'pt-br': "Pyroar",
		'de-de': "Pyroleo"
	},

	illustrator: "KEIICHIRO ITO",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		668,
	],

	hp: 130,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Litleo",
		'fr-fr': "Hélionceau",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Swirling Inferno",
				'fr-fr': "Torsade Infernale",
				'es-es': "Remolino Infernal",
				'it-it': "Turbine Infernale",
				'pt-br': "Turbilhão Infernal",
				'de-de': "Wirbelndes Inferno"
			},
			effect: {
				'en-us': "Discard all Pokémon Tool cards and Special Energy from each of your opponent’s Pokémon.",
				'fr-fr': "Défaussez toutes les cartes Outil Pokémon et l’Énergie spéciale de chacun des Pokémon de votre adversaire.",
				'es-es': "Descarta todas las cartas de Herramienta Pokémon y Energías Especiales de cada uno de los Pokémon de tu rival.",
				'it-it': "Scarta tutte le carte Oggetto Pokémon e le Energie speciali assegnate a ciascuno dei Pokémon del tuo avversario.",
				'pt-br': "Descarte todas as cartas de Ferramenta Pokémon e Energias Especiais de cada um dos Pokémon do seu oponente.",
				'de-de': "Lege alle Pokémon-Ausrüstungen und Spezial-Energien von jedem Pokémon deines Gegners auf seinen Ablagestapel."
			},
			damage: 70,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Heat Blast",
				'fr-fr': "Explosion de Chaleur",
				'es-es': "Explosión de Calor",
				'it-it': "Caldobomba",
				'pt-br': "Raio de Calor",
				'de-de': "Hitzestoß"
			},

			damage: 140,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "The males are usually lazy, but when attacked by a strong foe, a male will protect its friends with no regard for its own safety.",
	},

	thirdParty: {
		cardmarket: 407834,
		tcgplayer: 201214
	}
}

export default card
