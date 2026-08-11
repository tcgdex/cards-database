import { Card } from 'models/database/card'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		'en-us': "Noibat",
		'fr-fr': "Sonistrelle",
		'es-es': "Noibat",
		'it-it': "Noibat",
		'pt-br': "Noibat",
		'de-de': "eF-eM"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		714,
	],

	hp: 50,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Ram",
				'fr-fr': "Collision",
				'es-es': "Apisonar",
				'it-it': "Carica",
				'pt-br': "Aríete",
				'de-de': "Ramme"
			},

			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Destructive Sound",
				'fr-fr': "Son Destructeur",
				'es-es': "Sonido Destructivo",
				'it-it': "Distrusuono",
				'pt-br': "Som Destruidor",
				'de-de': "Trümmerton"
			},
			effect: {
				'en-us': "Your opponent reveals their hand. Discard all Item cards you find there.",
				'fr-fr': "Votre adversaire dévoile sa main. Défaussez toutes les cartes Objet que vous y trouvez.",
				'es-es': "Tu rival enseña las cartas de su mano. Descarta todas las cartas de Objeto que encuentres entre ellas.",
				'it-it': "Il tuo avversario mostra le carte che ha in mano. Scarta tutte le carte Strumento presenti tra esse.",
				'pt-br': "Seu oponente revela a própria mão. Descarte todas as cartas de Item que encontrar lá.",
				'de-de': "Dein Gegner zeigt dir seine Handkarten. Lege alle Itemkarten, die du dort findest, auf seinen Ablagestapel."
			},

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Even a robust wrestler will become dizzy and unable to stand when exposed to its 200,000-hertz ultrasonic waves.",
	},

	thirdParty: {
		cardmarket: 355613,
		tcgplayer: 165762
	}
}

export default card
