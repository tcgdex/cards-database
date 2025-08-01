import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Adventure Bag",
		fr: "Sac Aventure",
		es: "Bolsa Aventura",
		it: "Borsa Avventura",
		pt: "Bolsa de Aventura",
		de: "Abenteuerbeutel"
	},

	illustrator: "Yoshinobu Saito",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Cherchez jusqu’à 2 cartes Outil Pokémon dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
		en: "Search your deck for up to 2 Pokémon Tool cards, reveal them, and put them into your hand. Then, shuffle your deck.",
		es: "Busca en tu baraja hasta 2 cartas de Herramienta Pokémon, enséñalas y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
		it: "Cerca nel tuo mazzo fino a due carte Oggetto Pokémon, mostrale e aggiungile alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
		pt: "Procure por até 2 cartas de Ferramenta Pokémon no seu baralho, revele-as e coloque-as na sua mão. Em seguida, embaralhe o seu baralho.",
		de: "Durchsuche dein Deck nach bis zu 2 Pokémon-Ausrüstungen, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 365803
	}
}

export default card
