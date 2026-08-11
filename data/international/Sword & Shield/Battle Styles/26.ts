import { Card } from 'models/database/card'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [631],
	set: Set,

	name: {
		'en-us': "Heatmor",
		'fr-fr': "Aflamanoir",
		'es-es': "Heatmor",
		'it-it': "Heatmor",
		'pt-br': "Heatmor",
		'de-de': "Furnifraß"
	},

	illustrator: "Miki Tanaka",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],

	attacks: [{
		name: {
			'en-us': "Flare",
			'fr-fr': "Flamboiement",
			'es-es': "Llama",
			'it-it': "Fiammata",
			'pt-br': "Chama",
			'de-de': "Flackern"
		},

		damage: 20,
		cost: ["Fire"]
	}, {
		name: {
			'en-us': "Burning Licks",
			'fr-fr': "Léchures Brûlantes",
			'es-es': "Lengüetazos Abrasadores",
			'it-it': "Brucialeccate",
			'pt-br': "Lambidas Abrasadoras",
			'de-de': "Feuerzunge"
		},

		effect: {
			'en-us': "Flip 2 coins. For each heads, discard an Energy from your opponent's Active Pokémon.",
			'fr-fr': "Lancez 2 pièces. Pour chaque côté face, défaussez une Énergie du Pokémon Actif de votre adversaire.",
			'es-es': "Lanza 2 monedas. Por cada cara, descarta 1 Energía del Pokémon Activo de tu rival.",
			'it-it': "Lancia due volte una moneta. Ogni volta che esce testa, scarta un'Energia dal Pokémon attivo del tuo avversario.",
			'pt-br': "Jogue 2 moedas. Para cada cara, descarte 1 Energia do Pokémon Ativo do seu oponente.",
			'de-de': "Wirf 2 Münzen. Lege pro Kopf 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
		},

		damage: 70,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E",


	stage: "Basic",

	description: {
		'en-us': "A flame serves as its tongue, melting through the hard shell of Durant so that Heatmor can devour their insides."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 545031,
				tcgplayer: 234129
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 545031,
				tcgplayer: 234129
			}
		},
	],
}

export default card
