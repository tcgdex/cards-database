import { Card } from 'models/database/card'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [342],
	set: Set,

	name: {
		'en-us': "Crawdaunt",
		'fr-fr': "Colhomard",
		'es-es': "Crawdaunt",
		'it-it': "Crawdaunt",
		'pt-br': "Crawdaunt",
		'de-de': "Krebutack"
	},

	illustrator: "Hasegawa Saki",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Corphish",
		'fr-fr': "Écrapince",
		'es-es': "Corphish",
		'it-it': "Corphish",
		'pt-br': "Corphish",
		'de-de': "Krebscorps"
	},

	attacks: [{
		name: {
			'en-us': "Knock Off",
			'fr-fr': "Sabotage",
			'es-es': "Desarme",
			'it-it': "Privazione",
			'pt-br': "Derrubar",
			'de-de': "Abschlag"
		},

		effect: {
			'en-us': "Discard a random card from your opponent's hand.",
			'fr-fr': "Défaussez au hasard une carte de la main de votre adversaire.",
			'es-es': "Descarta 1 carta aleatoria de la mano de tu rival.",
			'it-it': "Scarta una carta a caso dalla mano del tuo avversario.",
			'pt-br': "Descarte 1 carta aleatória da mão do seu oponente.",
			'de-de': "Lege 1 zufällige Karte aus der Hand deines Gegners auf seinen Ablagestapel."
		},

		damage: 60,
		cost: ["Water", "Colorless", "Colorless"]
	}, {
		name: {
			'en-us': "Crabhammer",
			'fr-fr': "Pince-Masse",
			'es-es': "Martillazo",
			'it-it': "Martellata",
			'pt-br': "Martelo Caranguejo",
			'de-de': "Krabbhammer"
		},

		damage: 140,
		cost: ["Water", "Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E",


	stage: "Stage1",

	description: {
		'en-us': "A brutish Pokémon that loves to battle. It will crash itself into any foe that approaches its nest."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 545311,
				tcgplayer: 234176
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 545311,
				tcgplayer: 234176
			}
		},
	],
}

export default card
