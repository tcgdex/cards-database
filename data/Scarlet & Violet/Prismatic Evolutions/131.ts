import { Card } from "../../../interfaces"
import Set from "../Prismatic Evolutions"

const card: Card = {
	set: Set,

	name: {
		en: "Treasure Tracker",
		fr: "Détecteur de Trésors",
		es: "Rastreador de Tesoros",
		pt: "Rastreador de Tesouros",
		it: "Rilevatore di Tesori",
		de: "Schatz-Tracker"
	},

	rarity: "ACE SPEC Rare",
	category: "Trainer",

	effect: {
		en: "Search your deck for up to 5 Pokémon Tool cards, reveal them, and put them into your hand. Then, shuffle your deck.",
		fr: "Cherchez dans votre deck jusqu'à 5 cartes Outil Pokémon, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
		es: "Busca en tu baraja hasta 5 cartas de Herramienta Pokémon, enséñalas y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
		pt: "Procure por até 5 cartas de Ferramenta Pokémon no seu baralho, revele-as e coloque-as na sua mão. Em seguida, embaralhe o seu baralho.",
		it: "Cerca nel tuo mazzo fino a cinque carte Oggetto Pokémon, mostrale e aggiungile alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
		de: "Durchsuche dein Deck nach bis zu 5 Pokémon-Ausrüstungen, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
	},

	trainerType: "Item",
	regulationMark: "H",
	variants: {
		holo: true,
		normal: false
	}
}

export default card