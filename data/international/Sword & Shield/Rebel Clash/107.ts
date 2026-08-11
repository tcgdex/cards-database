import { Card } from 'models/database/card'
import Set from '../Rebel Clash'

const card: Card = {
	dexId: [839],

	name: {
		'en-us': "Coalossal",
		'fr-fr': "Monthracite",
		'es-es': "Coalossal",
		'it-it': "Coalossal",
		'pt-br': "Coalossal",
		'de-de': "Montecarbo"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		'en-us': "Carkol",
		'fr-fr': "Wagomine",
		'es-es': "Carkol",
		'it-it': "Carkol",
		'pt-br': "Carkol",
		'de-de': "Wagong"
	},

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Tar Generator",
				'fr-fr': "Générateur de Poix",
				'es-es': "Generador Alquitrán",
				'it-it': "Generatore di Catrame",
				'pt-br': "Gerador de Piche",
				'de-de': "Teergenerator"
			},
			effect: {
				'en-us': "Once during your turn, you may attach a Fire Energy card, a Fighting Energy card, or 1 of each from your discard pile to your Pokémon in any way you like.",
				'fr-fr': "Une fois pendant votre tour, vous pouvez attacher une carte Énergie Fire, une carte Énergie Fighting, ou une de chaque de votre pile de défausse à vos Pokémon comme il vous plaît.",
				'es-es': "Una vez durante tu turno, puedes unir 1 carta de Energía Fire, 1 carta de Energía Fighting o 1 de cada una de tu pila de descartes a tus Pokémon de la manera que desees.",
				'it-it': "Una sola volta durante il tuo turno, puoi assegnare ai tuoi Pokémon una carta Energia Fire, una carta Energia Fighting o entrambe dalla tua pila degli scarti nel modo che preferisci.",
				'pt-br': "Uma vez durante o seu turno, você poderá ligar 1 carta de Energia Fire, 1 carta de Energia Fighting, ou 1 de cada da sua pilha de descarte aos seus Pokémon como desejar.",
				'de-de': "Einmal während deines Zuges kannst du 1 Fire-Energiekarte, 1 Fighting-Energiekarte oder von beiden 1 aus deinem Ablagestapel beliebig an deine Pokémon anlegen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Flaming Avalanche",
				'fr-fr': "Avalanche Ardente",
				'es-es': "Avalancha Flamígera",
				'it-it': "Slavina Fiammeggiante",
				'pt-br': "Avalanche Flamejante",
				'de-de': "Lodernde Lawine"
			},

			damage: 130,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 4,
	hp: 160,
	types: ["Fighting"],
	regulationMark: "D",


	stage: "Stage2",

	description: {
		'en-us': "It's usually peaceful, but the vandalism of mines enrages it. Offenders will be incinerated with flames that reach 2,700 degrees Fahrenheit."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 457948,
				tcgplayer: 213195
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 457948,
				tcgplayer: 213195
			}
		},
	],
}

export default card
