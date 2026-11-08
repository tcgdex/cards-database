import { Card } from 'models/database/card'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		'en-us': "Blaziken",
		'fr-fr': "Braségali",
		'es-es': "Blaziken",
		'it-it': "Blaziken",
		'pt-br': "Blaziken",
		'de-de': "Lohgock"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		257,
	],

	hp: 140,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Combusken",
		'fr-fr': "Galifeu",
		'es-es': "Combusken",
		'it-it': "Combusken",
		'pt-br': "Combusken",
		'de-de': "Jungglut"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				'en-us': "Spreading Flames",
				'fr-fr': "Flammes Rampantes",
				'es-es': "Llamas Dispersas",
				'it-it': "Spargifiamma",
				'pt-br': "Chamas Alastrantes",
				'de-de': "Flammenausbreitung"
			},
			effect: {
				'en-us': "Attach 3 Fire Energy cards from your discard pile to your Pokémon in any way you like.",
				'fr-fr': "Attachez 3 cartes Énergie Fire de votre pile de défausse à vos Pokémon, de la manière que vous voulez.",
				'es-es': "Une 3 cartas de Energía Fire de tu pila de descartes a tus Pokémon de la manera que desees.",
				'it-it': "Assegna a piacimento ai tuoi Pokémon tre carte Energia Fire dalla tua pila degli scarti.",
				'pt-br': "Ligue 3 cards de Energia Fire da sua pilha de descarte a seus Pokémon do jeito que desejar.",
				'de-de': "Lege 3 Fire-Energiekarten von deinem Ablagestapel beliebig an deine Pokémon an."
			},

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Heat Blow",
				'fr-fr': "Coup Explosif",
				'es-es': "Golpe de Fuego",
				'it-it': "Colpocalore",
				'pt-br': "Golpe de Calor",
				'de-de': "Hitzschlag"
			},
			effect: {
				'en-us': "Discard an Energy attached to this Pokémon.",
				'fr-fr': "Défaussez une Énergie attachée à ce Pokémon.",
				'es-es': "Descarta 1 Energía unida a este Pokémon.",
				'it-it': "Scarta un'Energia assegnata a questo Pokémon.",
				'pt-br': "Descarte uma Energia ligada a este Pokémon.",
				'de-de': "Lege 1 an dieses Pokémon angelegte Energie auf deinen Ablagestapel."
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "When facing a tough foe, it looses flames from its wrists. Its powerful legs let it jump clear over buildings.",
	},

	thirdParty: {
		cardmarket: 273559,
		tcgplayer: 95920
	}
}

export default card
