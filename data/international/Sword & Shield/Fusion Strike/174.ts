import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [675],
	set: Set,

	name: {
		'en-us': "Pangoro",
		'fr-fr': "Pandarbare",
		'es-es': "Pangoro",
		'it-it': "Pangoro",
		'pt-br': "Pangoro",
		'de-de': "Pandagro"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 140,
	types: ["Darkness"],

	evolveFrom: {
		'en-us': "Pancham",
		'fr-fr': "Pandespiègle",
		'es-es': "Pancham",
		'it-it': "Pancham",
		'pt-br': "Pancham",
		'de-de': "Pam-Pam"
	},

	stage: "Stage1",
	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 4,
	regulationMark: "E",
	illustrator: "HYOGONOSUKE",

	description: {
		'en-us': "Using its leaf, Pangoro can predict the moves of its opponents. It strikes with punches that can turn a dump truck into scrap with just one hit."
	},

	attacks: [{
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			'en-us': "Knocking Hammer",
			'fr-fr': "Marteau Frappeur",
			'de-de': "Klopfender Hammer",
			'es-es': "Martillo Impacto",
			'pt-br': "Martelo Detonador",
			'it-it': "Martello Battente"
		},

		damage: 90,

		effect: {
			'en-us': "Discard the top card of your opponent's deck.",
			'fr-fr': "Défaussez la carte du dessus du deck de votre adversaire.",
			'de-de': "Lege die oberste Karte des Decks deines Gegners auf seinen Ablagestapel.",
			'es-es': "Descarta la primera carta de la baraja de tu rival.",
			'pt-br': "Descarte a carta de cima do baralho do seu oponente.",
			'it-it': "Scarta la prima carta del mazzo del tuo avversario."
		}
	}, {
		cost: ["Darkness", "Darkness", "Darkness", "Colorless"],

		name: {
			'en-us': "Shakedown",
			'fr-fr': "Dépouiller",
			'de-de': "Abschütteln",
			'es-es': "Conmocionar",
			'pt-br': "Extorsão",
			'it-it': "Scossone"
		},

		damage: 150,

		effect: {
			'en-us': "Discard a random card from your opponent's hand.",
			'fr-fr': "Défaussez au hasard une carte de la main de votre adversaire.",
			'de-de': "Lege 1 zufällige Karte aus der Hand deines Gegners auf seinen Ablagestapel.",
			'es-es': "Descarta 1 carta aleatoria de la mano de tu rival.",
			'pt-br': "Descarte 1 carta aleatória da mão do seu oponente.",
			'it-it': "Scarta una carta a caso dalla mano del tuo avversario."
		}
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582802,
				tcgplayer: 253388
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582802,
				tcgplayer: 253388
			}
		},
	],
}

export default card
