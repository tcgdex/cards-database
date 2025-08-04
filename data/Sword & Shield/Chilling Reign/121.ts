import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	name: {
		en: "Castform",
		fr: "Morphéo",
		es: "Castform",
		it: "Castform",
		pt: "Castform",
		de: "Formeo"
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
		en: "Its form changes depending on the weather. The rougher conditions get, the rougher Castform's disposition!",
		fr: 'Il n\'y a pas que son apparence qui change en\nfonction de la météo: son tempérament aussi !\nPlus il y a de vent, plus il se montre agressif.'
	},

	abilities: [{
		type: 'Ability',
		name: {
			en: 'Weather Reading',
			fr: 'Météorologie',
			es: "Interpretación del Tiempo",
			it: "Previsioni Meteo",
			pt: "Leitura Climática",
			de: "Wetterlesen"
		},
		effect: {
			en: "If you have 8 or more Stadium cards in your discard pile, ignore all Energy in this Pokémon's attack costs.",
			fr: "Si vous avez 8 cartes Stade ou plus dans votre pile de défausse, ignorez toutes les Énergies dans le coût des attaques de ce Pokémon.",
			es: "Si tienes 8 cartas de Estadio o más en tu pila de descartes, ignora todas las Energías en el coste de los ataques de este Pokémon.",
			it: "Sei hai otto o più carte Stadio nella tua pila degli scarti, ignora tutte le Energie necessarie per usare gli attacchi di questo Pokémon.",
			pt: "Se você tiver 8 ou mais cartas de Estádio na sua pilha de descarte, ignore todas as Energias nos custos dos ataques deste Pokémon.",
			de: "Wenn du 8 oder mehr Stadionkarten in deinem Ablagestapel hast, ignoriere alle Energien in den Attackenkosten dieses Pokémon."
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
				en: "Weather Force",
				fr: "Force Météo",
				es: "Fuerza Climática",
				it: "Meteoforza",
				pt: "Força Climática",
				de: "Wetterkraft"
			},
			effect: {
				en: "Draw cards until you have 6 cards in your hand.",
				fr: "Piochez des cartes jusqu'à en avoir 6 en main.",
				es: "Roba cartas hasta que tengas 6 cartas en tu mano.",
				it: "Pesca fino ad avere sei carte in mano.",
				pt: "Compre cartas até ter 6 cartas na sua mão.",
				de: "Ziehe so lange Karten, bis du 6 Karten auf deiner Hand hast."
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

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 567102,
		tcgplayer: 241800
	}
}

export default card
