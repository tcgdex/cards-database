import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Misty’s Favor",
		'fr-fr': "Faveur d’Ondine",
		'es-es': "Favor de Misty",
		'it-it': "Cortesia di Misty",
		'pt-br': "Favor da Misty",
		'de-de': "Mistys Gunst"
	},
	illustrator: "Hideki Ishikawa",
	rarity: "Uncommon",
	category: "Trainer",

	set: Set,











	effect: {
		'fr-fr': "Cherchez jusqu’à 3 cartes Supporter dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
		'en-us': "Search your deck for up to 3 Supporter cards, reveal them, and put them into your hand. Then, shuffle your deck.",
		'es-es': "Busca en tu baraja hasta 3 cartas de Partidario, enséñalas y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
		'it-it': "Cerca nel tuo mazzo fino a tre carte Aiuto, mostrale e aggiungile alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
		'pt-br': "Procure por até 3 cartas de Apoiador no seu baralho, revele-as e coloque-as na sua mão. Em seguida, embaralhe o seu baralho.",
		'de-de': "Durchsuche dein Deck nach bis zu 3 Unterstützerkarten, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
	},
	trainerType: "Supporter",

}

export default card
