import { Card } from 'models/database/card'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [122],
	set: Set,

	name: {
		'en-us': "Galarian Mr. Mime",
		'fr-fr': "M. Mime de Galar",
		'es-es': "Mr. Mime de Galar",
		'it-it': "Mr. Mime di Galar",
		'pt-br': "Mr. Mime de Galar",
		'de-de': "Galar-Pantimos"
	},

	illustrator: "kodama",
	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],

	attacks: [{
		name: {
			'en-us': "Pound",
			'fr-fr': "Écras'Face",
			'es-es': "Destructor",
			'it-it': "Botta",
			'pt-br': "Pancada",
			'de-de': "Klaps"
		},

		damage: 10,
		cost: ["Water"]
	}, {
		name: {
			'en-us': "Find It",
			'fr-fr': "Trifouiller",
			'es-es': "Busca",
			'it-it': "Cercatrova",
			'pt-br': "Encontrar",
			'de-de': "Aufspüren"
		},

		effect: {
			'en-us': "Search your deck for an Item card, reveal it, and put it into your hand. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck une carte Objet, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
			'es-es': "Busca en tu baraja 1 carta de Objeto, enséñala y ponla en tu mano. Después, baraja las cartas de tu baraja.",
			'it-it': "Cerca nel tuo mazzo una carta Strumento, mostrala e aggiungila a quelle che hai in mano. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Procure por 1 carta de Item no seu baralho, revele-a e coloque-a na sua mão. Em seguida, embaralhe o seu baralho.",
			'de-de': "Durchsuche dein Deck nach 1 Itemkarte, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
		},

		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",


	stage: "Basic",

	description: {
		'en-us': "It can radiate chilliness from the bottoms of its feet. It'll spend the whole day tap-dancing on a frozen floor."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 545156,
				tcgplayer: 234165
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 545156,
				tcgplayer: 234165
			}
		},
	],
}

export default card
