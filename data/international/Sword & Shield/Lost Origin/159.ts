import { Card } from "models/database/card"
import Set from "../Lost Origin"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Lady",
		'fr-fr': "Mademoiselle",
		'es-es': "Damisela",
		'it-it': "Lady",
		'pt-br': "Dama",
		'de-de': "Lady"
	},

	illustrator: "saino misaki",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'en-us': "Search your deck for up to 4 basic Energy cards, reveal them, and put them into your hand. Then, shuffle your deck.",
		'fr-fr': "Cherchez jusqu'à 4 cartes Énergie de base dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
		'es-es': "Busca en tu baraja hasta 4 cartas de Energía Básica, enséñalas y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
		'it-it': "Cerca nel tuo mazzo fino a quattro carte Energia base, mostrale e aggiungile alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
		'pt-br': "Procure por até 4 cartas de Energia básica no seu baralho, revele-as e coloque-as na sua mão. Em seguida, embaralhe o seu baralho.",
		'de-de': "Durchsuche dein Deck nach bis zu 4 Basis-Energiekarten, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
	},

	trainerType: "Supporter",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 674167,
				tcgplayer: 284090
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 674167,
				tcgplayer: 284090
			}
		},
	],
}

export default card
