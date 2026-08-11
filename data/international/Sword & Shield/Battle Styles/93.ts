import { Card } from 'models/database/card'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [198],
	set: Set,

	name: {
		'en-us': "Murkrow",
		'fr-fr': "Cornèbre",
		'es-es': "Murkrow",
		'it-it': "Murkrow",
		'pt-br': "Murkrow",
		'de-de': "Kramurx"
	},

	illustrator: "Aya Kusube",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	attacks: [{
		name: {
			'en-us': "Scout",
			'fr-fr': "Espionnage",
			'es-es': "Explorar",
			'it-it': "Esplorazione",
			'pt-br': "Explorador",
			'de-de': "Späher"
		},

		effect: {
			'en-us': "Your opponent reveals their hand.",
			'fr-fr': "Votre adversaire dévoile sa main.",
			'es-es': "Tu rival enseña las cartas de su mano.",
			'it-it': "Il tuo avversario mostra le carte che ha in mano.",
			'pt-br': "Seu oponente revela a própria mão.",
			'de-de': "Dein Gegner zeigt dir seine Handkarten."
		},

		cost: ["Colorless"]
	}, {
		name: {
			'en-us': "Peck",
			'fr-fr': "Picpic",
			'es-es': "Picotazo",
			'it-it': "Beccata",
			'pt-br': "Bicada",
			'de-de': "Pikser"
		},

		damage: 20,
		cost: ["Darkness", "Colorless"]
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
	regulationMark: "E",


	stage: "Basic",

	description: {
		'en-us': "It searches for shiny things for its boss. Murkrow's presence is said to be unlucky, so many people detest it."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 545556,
				tcgplayer: 234224
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 545556,
				tcgplayer: 234224
			}
		},
	],
}

export default card
