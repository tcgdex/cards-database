import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Swoobat",
		'fr-fr': "Rhinolove",
		'es-es': "Swoobat",
		'it-it': "Swoobat",
		'pt-br': "Swoobat",
		'de-de': "Fletiamo"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],
	stage: "Stage1",
	illustrator: "nagimiso",

	attacks: [{
		name: {
			'en-us': "Synchro Woofer",
			'fr-fr': "Fréquence Synchro",
			'es-es': "Frecuencia Sincronizada",
			'it-it': "Sincrowoofer",
			'pt-br': "Synchro Woofer",
			'de-de': "Synchro-Woofer"
		},

		effect: {
			'en-us': "If you have the same number of cards in your hand as your opponent, this attack does 80 more damage.",
			'fr-fr': "Si vous avez le même nombre de cartes dans votre main que votre adversaire, cette attaque inflige 80 dégâts supplémentaires.",
			'es-es': "Si tienes la misma cantidad de cartas en tu mano que tu rival, este ataque hace 80 puntos de daño más.",
			'it-it': "Se hai lo stesso numero di carte in mano del tuo avversario, questo attacco infligge 80 danni in più.",
			'pt-br': "If you have the same number of cards in your hand as your opponent, this attack does 80 more damage.",
			'de-de': "Wenn du genauso viele Karten auf der Hand hast wie dein Gegner, fügt diese Attacke 80 Schadenspunkte mehr zu."
		},

		damage: "30+",
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,

	evolveFrom: {
		'en-us': "Woobat",
		'fr-fr': "Chovsourir",
		'es-es': "Woobat",
		'it-it': "Woobat",
		'pt-br': "Woobat",
		'de-de': "Fleknoil"
	},

	description: {
		'en-us': "The auspicious shape of this Pokémon's nose apparently led some regions to consider Swoobat a symbol of good luck."
	},

	dexId: [528],
	regulationMark: "E",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 574117,
				tcgplayer: 246845
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 574117,
				tcgplayer: 246845
			}
		},
	],
}

export default card
