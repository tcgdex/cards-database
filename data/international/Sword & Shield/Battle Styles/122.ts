import { Card } from 'models/database/card'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		'en-us': "Camping Gear",
		'fr-fr': "Kit de Camping",
		'es-es': "Kit de Acampada",
		'it-it': "Kit da campeggio",
		'pt-br': "Equipamento de Camping",
		'de-de': "Camping-Set"
	},

	illustrator: "sadaji",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'en-us': "Search your deck for a card and put it into your hand. Then, shuffle your deck. Your turn ends.",
		'fr-fr': "Cherchez dans votre deck une carte, puis ajoutez-la à votre main. Mélangez ensuite votre deck. Votre tour se termine.",
		'es-es': "Busca en tu baraja 1 carta y ponla en tu mano. Después, baraja las cartas de tu baraja. Tu turno termina.",
		'it-it': "Cerca nel tuo mazzo una carta e aggiungila a quelle che hai in mano. Poi rimischia le carte del tuo mazzo. Il tuo turno finisce.",
		'pt-br': "Procure por 1 carta no seu baralho e coloque-a na sua mão. Em seguida, embaralhe o seu baralho. O seu turno acaba.",
		'de-de': "Durchsuche dein Deck nach 1 Karte und nimm sie auf deine Hand. Mische anschließend dein Deck. Dein Zug endet."
	},

	trainerType: "Item",
	regulationMark: "E",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 545816,
				tcgplayer: 234114
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 545816,
				tcgplayer: 234114
			}
		},
	],
}

export default card
