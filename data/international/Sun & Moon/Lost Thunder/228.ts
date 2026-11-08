import { Card } from 'models/database/card'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		'en-us': "Adventure Bag",
		'fr-fr': "Sac Aventure",
		'es-es': "Bolsa Aventura",
		'it-it': "Borsa Avventura",
		'pt-br': "Bolsa de Aventura",
		'de-de': "Abenteuerbeutel"
	},

	illustrator: "Yoshinobu Saito",
	rarity: "Secret Rare",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Cherchez jusqu’à 2 cartes Outil Pokémon dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
		'en-us': "Search your deck for up to 2 Pokémon Tool cards, reveal them, and put them into your hand. Then, shuffle your deck.",
		'es-es': "Busca en tu baraja hasta 2 cartas de Herramienta Pokémon, enséñalas y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
		'it-it': "Cerca nel tuo mazzo fino a due carte Oggetto Pokémon, mostrale e aggiungile alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
		'pt-br': "Procure por até 2 cartas de Ferramenta Pokémon no seu baralho, revele-as e coloque-as na sua mão. Em seguida, embaralhe o seu baralho.",
		'de-de': "Durchsuche dein Deck nach bis zu 2 Pokémon-Ausrüstungen, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 365861,
		tcgplayer: 178992
	}
}

export default card
