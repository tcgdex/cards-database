import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	name: {
		'en-us': "Castform Sunny Form",
		'fr-fr': "Morphéo Forme Solaire",
		'es-es': "Castform Forma Sol",
		'it-it': "Castform Forma Sole",
		'pt-br': "Castform Forma Ensolarada",
		'de-de': "Formeo Sonnenform"
	},

	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 70,
	dexId: [351],

	types: [
		"Fire",
	],

	stage: 'Basic',

	description: {
		'en-us': "Castform changes to this form when it basks in bright sunlight. When you touch its glowing skin, it feels all dried out!",
		'fr-fr': 'Morphéo adopte cette apparence lorsqu\'il y a du soleil.\nSon corps rougeoyant est très sec au toucher.'
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
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "High-Pressure Blast",
				'fr-fr': "Explosion Sous Pression",
				'es-es': "Estallido de Alta Presión",
				'it-it': "Scoppio ad Alta Pressione",
				'pt-br': "Explosão de Alta Pressão",
				'de-de': "Hochdruckstoß"
			},
			effect: {
				'en-us': "Discard a Stadium in play. If you can't, this attack does nothing.",
				'fr-fr': "Défaussez un Stade en jeu. Si vous ne le pouvez pas, cette attaque ne fait rien.",
				'es-es': "Descarta un Estadio en juego. Si no puedes, este ataque no hace nada.",
				'it-it': "Scarta una carta Stadio in gioco. Se non puoi, questo attacco non ha effetto.",
				'pt-br': "Descarte 1 Estádio em jogo. Se não puder fazer isto, este ataque não fará nada.",
				'de-de': "Lege 1 Stadionkarte im Spiel auf den Ablagestapel. Wenn du das nicht machen kannst, hat diese Attacke keine Auswirkungen."
			},
			damage: 150
		}
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 0,
	regulationMark: "E",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 567102,
				tcgplayer: 241674
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 567102,
				tcgplayer: 241674
			}
		},
	],
}

export default card
