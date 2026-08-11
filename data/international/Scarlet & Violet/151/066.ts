import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [66],
	set: Set,

	name: {
		'fr-fr': "Machoc",
		'en-us': "Machop",
		'es-es': "Machop",
		'it-it': "Machop",
		'pt-br': "Machop",
		'de-de': "Machollo"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'fr-fr': "Écrase-Montagnes",
			'en-us': "Mountain Mashing",
			'es-es': "Aplastamiento Montaña",
			'it-it': "Percuotimonte",
			'pt-br': "Esmagamento Montanhoso",
			'de-de': "Bergzermalmer"
		},

		effect: {
			'fr-fr': "Défaussez la carte du dessus du deck de votre adversaire.",
			'en-us': "Discard the top card of your opponent's deck.",
			'es-es': "Descarta la primera carta de la baraja de tu rival.",
			'it-it': "Scarta la prima carta del mazzo del tuo avversario.",
			'pt-br': "Descarte a carta de cima do baralho do seu oponente.",
			'de-de': "Lege die oberste Karte vom Deck deines Gegners auf seinen Ablagestapel."
		}
	}, {
		cost: ["Fighting", "Fighting"],

		name: {
			'fr-fr': "Koud'Poing",
			'en-us': "Punch",
			'es-es': "Puño",
			'it-it': "Pugno",
			'pt-br': "Soco",
			'de-de': "Boxhieb"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	description: {
		'en-us': "Always brimming with power, it passes time by lifting boulders. Doing so makes it even stronger.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 733661,
				tcgplayer: 516382,
				cardtrader: 261129
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733661,
				tcgplayer: 516382,
				cardtrader: 261129
			}
		},
	],

	illustrator: "Ryuta Fuse",

	
}

export default card
