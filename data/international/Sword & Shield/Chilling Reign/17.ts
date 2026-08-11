import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [811],
	set: Set,

	name: {
		'en-us': "Thwackey",
		'fr-fr': "Badabouin",
		'es-es': "Thwackey",
		'it-it': "Thwackey",
		'pt-br': "Thwackey",
		'de-de': "Chimstix"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Grookey",
		'fr-fr': "Ouistempo",
		'es-es': "Grookey",
		'it-it': "Grookey",
		'pt-br': "Grookey",
		'de-de': "Chimpep"
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

		damage: 30,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E",


	stage: "Stage1",

	description: {
		'en-us': "When it's drumming out rapid beats in battle, it gets so caught up in the rhythm that it won't even notice that it's already knocked out its opponent."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 567097,
				tcgplayer: 241666
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 567097,
				tcgplayer: 241666
			}
		},
	],
}

export default card
