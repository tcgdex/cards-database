import { Card } from 'models/database/card'
import Set from '../Vivid Voltage'

const card: Card = {
	dexId: [568],

	name: {
		'en-us': "Trubbish",
		'fr-fr': "Miamiasme",
		'es-es': "Trubbish",
		'it-it': "Trubbish",
		'pt-br': "Trubbish",
		'de-de': "Unratütox"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 70,

	types: [
		"Darkness",
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Lucky Find",
				'fr-fr': "Trouvaille Inespérée",
				'es-es': "Hallazgo Afortunado",
				'it-it': "Ritrovamento Fortunato",
				'pt-br': "Descoberta Sortuda",
				'de-de': "Glücksfund"
			},
			effect: {
				'en-us': "Search your deck for an Item card, reveal it, and put it into your hand. Then, shuffle your deck.",
				'fr-fr': "Cherchez dans votre deck une carte Objet, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
				'es-es': "Busca en tu baraja 1 carta de Objeto, enséñala y ponla en tu mano. Después, baraja las cartas de tu baraja.",
				'it-it': "Cerca nel tuo mazzo una carta Strumento, mostrala e aggiungila a quelle che hai in mano. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Procure por 1 carta de Item no seu baralho, revele-a e coloque-a na sua mão. Em seguida, embaralhe o seu baralho.",
				'de-de': "Durchsuche dein Deck nach 1 Itemkarte, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Sludge Toss",
				'fr-fr': "Giclée Vaseuse",
				'es-es': "Lanzamiento de Residuos",
				'it-it': "Lanciamelma",
				'pt-br': "Arremesso de Lodo",
				'de-de': "Schleimwurf"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "Its favorite places are unsanitary ones. If you leave trash lying around, you could even find one of these Pokémon living in your room."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 511970,
				tcgplayer: 226563
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 511970,
				tcgplayer: 226563
			}
		},
	],
}

export default card
