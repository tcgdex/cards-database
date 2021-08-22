import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Fog Crystal",
		fr: "Boule de Cristal Brume",
		es: "Cristal Niebla",
		it: "Cristallo di Bruma",
		pt: "Cristal Nevoado",
		de: "Nebelkristall"
	},

	rarity: "Secret Rare",
	category: "Trainer",

	effect: {
		en: "Search your deck for a Psychic Energy card or a Basic Psychic Pokémon, reveal it, and put it into your hand. Then, shuffle your deck.",
		fr: "Cherchez dans votre deck une carte Énergie Psychic ou une carte Pokémon Psychic de base, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
		es: "Busca en tu baraja 1 carta de Energía Psychic o 1 Pokémon Psychic Básico, enseña esa carta y ponla en tu mano. Después, baraja las cartas de tu baraja.",
		it: "Cerca nel tuo mazzo una carta Energia Psychic o un Pokémon Base Psychic, mostra la carta e aggiungila a quelle che hai in mano. Poi rimischia le carte del tuo mazzo.",
		pt: "Procure por 1 carta de Energia Psychic ou por 1 Pokémon Psychic Básico no seu baralho, revele-o e coloque-o na sua mão. Em seguida, embaralhe o seu baralho.",
		de: "Durchsuche dein Deck nach 1 Psychic-Energiekarte oder 1 Basis-Psychic-Pokémon, zeige jene Karte deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
	},

	trainerType: "Item",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	illustrator: "sadaji"
}

export default card