import { Card } from 'models/database/card'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [344],
	set: Set,

	name: {
		'en-us': "Claydol",
		'fr-fr': "Kaorine",
		'es-es': "Claydol",
		'it-it': "Claydol",
		'pt-br': "Claydol",
		'de-de': "Lepumentas"
	},

	illustrator: "Shibuzoh.",
	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	evolveFrom: {
		'en-us': "Baltoy",
		'fr-fr': "Balbuto",
		'es-es': "Baltoy",
		'it-it': "Baltoy",
		'pt-br': "Baltoy",
		'de-de': "Puppance"
	},

	attacks: [{
		name: {
			'en-us': "Power Split",
			'fr-fr': "Partage Force",
			'es-es': "Isofuerza",
			'it-it': "Pariattacco",
			'pt-br': "Divisão Poderosa",
			'de-de': "Kraftteiler"
		},

		effect: {
			'en-us': "Attach Psychic Energy cards from your discard pile to your Pokémon in any way you like until your Pokémon and your opponent's Pokémon have the same total amount of Energy attached.",
			'fr-fr': "Attachez des cartes Énergie Psychic de votre pile de défausse à vos Pokémon comme il vous plaît, jusqu'à ce que vos Pokémon et ceux de votre adversaire aient la même quantité d'Énergie attachée.",
			'es-es': "Une cartas de Energía Psychic de tu pila de descartes a tus Pokémon de la manera que desees hasta que tus Pokémon y los Pokémon de tu rival tengan la misma cantidad total de Energías unidas a ellos.",
			'it-it': "Assegna ai tuoi Pokémon delle carte Energia Psychic dalla tua pila degli scarti nel modo che preferisci finché i tuoi Pokémon e quelli del tuo avversario non hanno lo stesso numero totale di Energie assegnate.",
			'pt-br': "Ligue cartas de Energia Psychic da sua pilha de descarte aos seus Pokémon como desejar até que seus Pokémon e os Pokémon do seu oponente tenham a mesma quantidade total de Energia ligada a eles.",
			'de-de': "Lege so lange Psychic-Energiekarten aus deinem Ablagestapel beliebig an deine Pokémon an, bis an deine Pokémon und die Pokémon deines Gegners dieselbe Gesamtzahl von Energiekarten angelegt ist."
		},

		cost: ["Colorless"]
	}, {
		name: {
			'en-us': "Psyshot",
			'fr-fr': "Piqûre Psy",
			'es-es': "Disparo Psi",
			'it-it': "Psicosparo",
			'pt-br': "Tiro Psíquico",
			'de-de': "Psychoschuss"
		},

		damage: 100,
		cost: ["Psychic", "Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "E",


	stage: "Stage1",

	description: {
		'en-us': "It appears to have been born from clay dolls made by ancient people. It uses telekinesis to float and move."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 545401,
				tcgplayer: 234230
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 545401,
				tcgplayer: 234230
			}
		},
	],
}

export default card
