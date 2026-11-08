import { Card } from 'models/database/card'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		'en-us': "Capacious Bucket",
		'fr-fr': "Grand Seau",
		'es-es': "Cubo Espacioso",
		'it-it': "Secchio Capiente",
		'pt-br': "Balde Profundo",
		'de-de': "Geräumiger Eimer"
	},

	illustrator: "sadaji",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "Search your deck for up to 2 Water Energy cards, reveal them, and put them into your hand. Then, shuffle your deck.",
		'fr-fr': "Cherchez dans votre deck jusqu'à 2 cartes Énergie Water, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
		'es-es': "Busca en tu baraja hasta 2 cartas de Energía Water, enséñalas y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
		'it-it': "Cerca nel tuo mazzo fino a due carte Energia Water, mostrale e aggiungile alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
		'pt-br': "Procure por até 2 cartas de Energia Water no seu baralho, revele-as e coloque-as na sua mão. Em seguida, embaralhe o seu baralho.",
		'de-de': "Durchsuche dein Deck nach bis zu 2 Water-Energiekarten, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
	},

	trainerType: "Item",
	regulationMark: "D",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 458173,
				tcgplayer: 213259
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 458173,
				tcgplayer: 213259
			}
		},
	],
}

export default card
