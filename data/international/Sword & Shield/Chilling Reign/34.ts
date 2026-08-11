import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	name: {
		'en-us': "Castform Snowy Form",
		'fr-fr': "Morphéo Forme Blizzard",
		'es-es': "Castform Forma Nieve",
		'it-it': "Castform Forma Nuvola di Neve",
		'pt-br': "Castform Forma Nevada",
		'de-de': "Formeo Schneeform"
	},

	illustrator: "miki kudo",
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
		'en-us': "This is Castform's form when caught in a hailstorm. Its whole body is chilled, and its skin is partially frozen!",
		'fr-fr': 'Morphéo adopte cette apparence quand\n il est frappé par la grèle. Tout son corps est froid et sa peau est légèrement givrée.'
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
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Frosty Typhoon",
				'fr-fr': "Typhon Givré",
				'es-es': "Tifón Gélido",
				'it-it': "Gelotifone",
				'pt-br': "Tufão Glacial",
				'de-de': "Frosttaifun"
			},
			effect: {
				'en-us': "During your next turn, this Pokémon can't use Frosty Typhoon.",
				'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Typhon Givré.",
				'es-es': "Durante tu próximo turno, este Pokémon no puede usar Tifón Gélido.",
				'it-it': "Durante il tuo prossimo turno, questo Pokémon non può usare Gelotifone.",
				'pt-br': "Durante o seu próximo turno, este Pokémon não poderá usar Tufão Glacial.",
				'de-de': "Während deines nächsten Zuges kann dieses Pokémon Frosttaifun nicht einsetzen."
			},
			damage: 120
		}
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 0,
	regulationMark: "E",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 567114,
				tcgplayer: 241687
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 567114,
				tcgplayer: 241687
			}
		},
	],
}

export default card
