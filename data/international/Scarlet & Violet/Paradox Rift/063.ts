import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [523],
	set: Set,

	name: {
		'en-us': "Zebstrika",
		'fr-fr': "Zéblitz",
		'es-es': "Zebstrika",
		'it-it': "Zebstrika",
		'pt-br': "Zebstrika",
		'de-de': "Zebritz"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],
	evolveFrom: {
		'en-us': "Blitzle",
		'fr-fr': "Zébibron",
		'es-es': "Blitzle",
		'it-it': "Blitzle",
		'pt-br': "Blitzle",
		'de-de': "Elezeba"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Lightning"],

		name: {
			'en-us': "Burst of Braying",
			'fr-fr': "Hennissement Éclatant",
			'es-es': "Bramido Explosivo",
			'it-it': "Raglioscoppio",
			'pt-br': "Explosão de Zurro",
			'de-de': "Wuchtiges Wiehern"
		},

		effect: {
			'en-us': "Choose Basic {L} Energy cards from your discard pile up to the number of Prize cards your opponent has taken and attach them to your Pokémon in any way you like.",
			'fr-fr': "Choisissez dans votre pile de défausse un nombre de cartes Énergie {L} de base inférieur ou égal au nombre de cartes Récompense que votre adversaire a récupérées, puis attachez-les à vos Pokémon comme il vous plaît.",
			'es-es': "Elige una cantidad de cartas de Energía {L} Básica de tu pila de descartes igual o inferior al número de cartas de Premio que haya cogido tu rival, y únelas a tus Pokémon de la manera que desees.",
			'it-it': "Scegli un numero di carte Energia base {L} dalla tua pila degli scarti uguale o inferiore al numero di carte Premio prese dal tuo avversario e assegnale ai tuoi Pokémon nel modo che preferisci.",
			'pt-br': "Escolha cartas de Energia {L} Básica da sua pilha de descarte até o número de cartas de Prêmio que o seu oponente pegou e ligue-as aos seus Pokémon como desejar.",
			'de-de': "Wähle bis zu so viele Basis-{L}-Energiekarten aus deinem Ablagestapel, wie dein Gegner Preiskarten genommen hat, und lege sie beliebig an deine Pokémon an."
		}
	}, {
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			'en-us': "Thunder",
			'fr-fr': "Fatal-Foudre",
			'es-es': "Trueno",
			'it-it': "Tuono",
			'pt-br': "Trovão",
			'de-de': "Donner"
		},

		effect: {
			'en-us': "This Pokémon also does 50 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 50 dégâts.",
			'es-es': "Este Pokémon también se hace 50 puntos de daño a sí mismo.",
			'it-it': "Questo Pokémon infligge anche 50 danni a se stesso.",
			'pt-br': "Este Pokémon também causa 50 pontos de dano a si mesmo.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 50 Schadenspunkte zu."
		},

		damage: 150
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "They have lightning-like movements. When Zebstrika run at full speed, the sound of thunder reverberates.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 740554,
				tcgplayer: 523679,
				cardtrader: 265143
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 740554,
				tcgplayer: 523679,
				cardtrader: 265143
			}
		},
	],

	illustrator: "GOSSAN",

	
}

export default card
