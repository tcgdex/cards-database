import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	name: {
		'en-us': "Castform Rainy Form",
		'fr-fr': "Morphéo Forme Eau de Pluie",
		'es-es': "Castform Forma Lluvia",
		'it-it': "Castform Forma Pioggia",
		'pt-br': "Castform Forma Chuvosa",
		'de-de': "Formeo Regenform"
	},

	illustrator: "sowsow",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 70,
	dexId: [351],

	types: [
		"Water",
	],

	stage: 'Basic',

	description: {
		'en-us': "This is Castform's form when pelted by rain. In an experiment where it was placed in a shower, this Pokémon didn't change to this form.",
		'fr-fr': 'Morphéo adopte cette apparence uniquement\n les jours de pluie. On a tenté de reproduire ce\nphénomène sous une douche, sans succès.'
	},

	abilities: [{
		type: 'Ability',
		name: {
			'en-us': 'Weather Reading',
			'fr-fr': 'Météorologie',
			'es-es': "Interpretación del Tiempo",
			'it-it': "Previsioni Meteo",
			'pt-br': "Leitura Climática",
			'de-de': "Wetterlesen"
		},
		effect: {
			'en-us': "If you have 8 or more Stadium cards in your discard pile, ignore all Energy in this Pokémon's attack costs.",
			'fr-fr': "Si vous avez 8 cartes Stade ou plus dans votre pile de défausse, ignorez toutes les Énergies dans le coût des attaques de ce Pokémon.",
			'es-es': "Si tienes 8 cartas de Estadio o más en tu pila de descartes, ignora todas las Energías en el coste de los ataques de este Pokémon.",
			'it-it': "Sei hai otto o più carte Stadio nella tua pila degli scarti, ignora tutte le Energie necessarie per usare gli attacchi di questo Pokémon.",
			'pt-br': "Se você tiver 8 ou mais cartas de Estádio na sua pilha de descarte, ignore todas as Energias nos custos dos ataques deste Pokémon.",
			'de-de': "Wenn du 8 oder mehr Stadionkarten in deinem Ablagestapel hast, ignoriere alle Energien in den Attackenkosten dieses Pokémon."
		}
	}],

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Rainfall",
				'fr-fr': "Ondée",
				'es-es': "Aguacero",
				'it-it': "Rovesci",
				'pt-br': "Toró",
				'de-de': "Regenfall"
			},
			effect: {
				'en-us': "This attack does 20 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige 20 dégâts à chacun des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'es-es': "Este ataque hace 20 puntos de daño a cada uno de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				'it-it': "Questo attacco infligge 20 danni a ciascuno dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
				'pt-br': "Este ataque causa 20 pontos de dano a cada um dos Pokémon do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				'de-de': "Diese Attacke fügt jedem Pokémon deines Gegners 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			}
		}
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 0,
	regulationMark: "E",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 567113,
				tcgplayer: 241686
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 567113,
				tcgplayer: 241686
			}
		},
	],
}

export default card
