import { Card } from 'models/database/card'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		'en-us': "Steven’s Resolve",
		'fr-fr': "Résolution de Pierre",
		'es-es': "Decisión de Máximo",
		'it-it': "Grinta di Rocco",
		'pt-br': "Resolução do Steven",
		'de-de': "Troys Entschluss"
	},
	illustrator: "Hitoshi Ariga",
	rarity: "Rare",
	category: "Trainer",

	set: Set,











	effect: {
		'fr-fr': "Cherchez jusqu’à 3 cartes dans votre deck et ajoutez-les à votre main. Mélangez ensuite votre deck. Votre tour se termine.",
		'en-us': "Search your deck for up to 3 cards and put them into your hand. Then, shuffle your deck. Your turn ends.",
		'es-es': "Busca en tu baraja hasta 3 cartas y ponlas en tu mano. Después, baraja las cartas de tu baraja. Tu turno termina.",
		'it-it': "Cerca nel tuo mazzo fino a tre carte e aggiungile alle carte che hai in mano. Poi rimischia le carte del tuo mazzo. Il tuo turno finisce.",
		'pt-br': "Procure por até 3 cartas no seu baralho e coloque-as na sua mão. Em seguida, embaralhe o seu baralho. A sua vez de jogar acaba.",
		'de-de': "Durchsuche dein Deck nach bis zu 3 Karten und nimm sie auf deine Hand. Mische anschließend dein Deck. Dein Zug endet."
	},
	trainerType: "Supporter",

}

export default card
