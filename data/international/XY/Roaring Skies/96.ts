import { Card } from 'models/database/card'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		'en-us': "Winona",
		'fr-fr': "Alizée",
		'es-es': "Alana",
		'it-it': "Alice",
		'pt-br': "Winona",
		'de-de': "Wibke"
	},

	illustrator: "Megumi Mizutani",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Cherchez jusqu'à 3 Pokémon Colorless dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
		'en-us': "Search your deck for up to 3 Colorless Pokémon, reveal them, and put them into your hand. Shuffle your deck afterward.",
		'es-es': "Busca en tu baraja hasta 3 Pokémon Colorless, enséñalos y ponlos en tu mano. Baraja las cartas de tu baraja después.",
		'it-it': "Cerca nel tuo mazzo fino a tre Pokémon Colorless, mostrali e aggiungili alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
		'pt-br': "Procure no seu baralho até 3 Pokémon Colorless, revele-os e coloque-os na mão. Em seguida, embaralhe seus cards.",
		'de-de': "Durchsuche dein Deck nach bis zu 3 Colorless-Pokémon, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 282764,
		tcgplayer: 98132
	}
}

export default card
