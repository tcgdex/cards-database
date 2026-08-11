import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	name: {
		'en-us': "Castform",
		'fr-fr': "Morphéo",
		'es-es': "Castform",
		'it-it': "Castform",
		'pt-br': "Castform",
		'de-de': "Formeo"
	},

	illustrator: "Asako Ito",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 70,
	dexId: [351],

	types: [
		"Colorless",
	],

	stage: 'Basic',

	description: {
		'en-us': "Its form changes depending on the weather. The rougher conditions get, the rougher Castform's disposition!",
		'fr-fr': 'Il n\'y a pas que son apparence qui change en\nfonction de la météo: son tempérament aussi !\nPlus il y a de vent, plus il se montre agressif.'
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
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Weather Force",
				'fr-fr': "Force Météo",
				'es-es': "Fuerza Climática",
				'it-it': "Meteoforza",
				'pt-br': "Força Climática",
				'de-de': "Wetterkraft"
			},
			effect: {
				'en-us': "Draw cards until you have 6 cards in your hand.",
				'fr-fr': "Piochez des cartes jusqu'à en avoir 6 en main.",
				'es-es': "Roba cartas hasta que tengas 6 cartas en tu mano.",
				'it-it': "Pesca fino ad avere sei carte in mano.",
				'pt-br': "Compre cartas até ter 6 cartas na sua mão.",
				'de-de': "Ziehe so lange Karten, bis du 6 Karten auf deiner Hand hast."
			},
			damage: 80
		}
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 0,
	regulationMark: "E",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 567229,
				tcgplayer: 241800
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 567229,
				tcgplayer: 241800
			}
		},
	],
}

export default card
