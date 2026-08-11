import { Card } from 'models/database/card'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		'en-us': "Venonat",
		'fr-fr': "Mimitoss",
		'es-es': "Venonat",
		'it-it': "Venonat",
		'pt-br': "Venonat",
		'de-de': "Bluzuk"
	},

	illustrator: "kirisAki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		48,
	],

	hp: 60,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Radar Eyes",
				'fr-fr': "Regard Radar",
				'es-es': "Ojos de Radar",
				'it-it': "Sguardo Radar",
				'pt-br': "Olhos de Radar",
				'de-de': "Radaraugen"
			},
			effect: {
				'en-us': "Look at the top 7 cards of your deck and put 1 of them into your hand. Shuffle the other cards back into your deck.",
				'fr-fr': "Regardez les 7 cartes du dessus de votre deck, puis ajoutez l’une d’entre elles à votre main. Mélangez les autres cartes avec votre deck.",
				'es-es': "Mira las 7 primeras cartas de tu baraja y pon 1 de ellas en tu mano. Pon el resto de cartas de nuevo en tu baraja y barájalas todas.",
				'it-it': "Guarda le prime sette carte del tuo mazzo e aggiungi una di esse alle carte che hai in mano. Poi rimischia le altre carte nel tuo mazzo.",
				'pt-br': "Olhe as 7 primeiras cartas do seu baralho e coloque 1 delas na sua mão. Embaralhe as demais cartas de volta no seu baralho.",
				'de-de': "Schau dir die obersten 7 Karten deines Decks an und nimm 1 von ihnen auf deine Hand. Mische die anderen Karten zurück in dein Deck."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Flop",
				'fr-fr': "Flop",
				'es-es': "Vuelta",
				'it-it': "Tonfo",
				'pt-br': "Baque",
				'de-de': "Plumps"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Its big eyes are actually clusters of tiny eyes. At night, its kind is drawn by light.",
	},

	thirdParty: {
		cardmarket: 372302,
		tcgplayer: 189047
	}
}

export default card
