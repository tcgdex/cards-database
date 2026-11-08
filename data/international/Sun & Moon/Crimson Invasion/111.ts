import { Card } from 'models/database/card'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		'en-us': "Olivia",
		'fr-fr': "Alyxia",
		'es-es': "Mayla",
		'it-it': "Alyxia",
		'pt-br': "Olívia",
		'de-de': "Mayla"
	},

	illustrator: "Naoki Saito",
	rarity: "Ultra Rare",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Cherchez jusqu’à 2 Pokémon-GX dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
		'en-us': "Search your deck for up to 2 Pokémon-GX, reveal them, and put them into your hand. Then, shuffle your deck.",
		'es-es': "Busca en tu baraja hasta 2 Pokémon-GX, enséñalos y ponlos en tu mano. Después, baraja las cartas de tu baraja.",
		'it-it': "Cerca nel tuo mazzo fino a due Pokémon-GX, mostrali e aggiungili alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
		'pt-br': "Procure por até 2 Pokémon-GX no seu baralho, revele-os e coloque-os na sua mão. Em seguida, embaralhe o seu baralho.",
		'de-de': "Durchsuche dein Deck nach bis zu 2 Pokémon-GX, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 311958,
		tcgplayer: 149144
	}
}

export default card
