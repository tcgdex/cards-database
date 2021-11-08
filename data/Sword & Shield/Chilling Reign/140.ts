import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	name: {
		fr: "Boule de Cristal Brume",
		en: "Fog Crystal",
		es: "Cristal Niebla",
		it: "Cristallo di Bruma",
		pt: "Cristal Nevoado",
		de: "Nebelkristall"
	},

	illustrator: "sadaji",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Item",

	effect: {
		fr: "Cherchez dans votre deck une carte Énergie Psychic ou une carte Pokémon Psychic de base, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
		en: "Search your deck for a Psychic Energy card or a Basic Psychic Pokémon, reveal it, and put it into your hand. Then, shuffle your deck.",
		es: "Busca en tu baraja 1 carta de Energía Psychic o 1 Pokémon Psychic Básico, enseña esa carta y ponla en tu mano. Después, baraja las cartas de tu baraja.",
		it: "Cerca nel tuo mazzo una carta Energia Psychic o un Pokémon Base Psychic, mostra la carta e aggiungila a quelle che hai in mano. Poi rimischia le carte del tuo mazzo.",
		pt: "Procure por 1 carta de Energia Psychic ou por 1 Pokémon Psychic Básico no seu baralho, revele-o e coloque-o na sua mão. Em seguida, embaralhe o seu baralho.",
		de: "Durchsuche dein Deck nach 1 Psychic-Energiekarte oder 1 Basis-Psychic-Pokémon, zeige jene Karte deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
	},

	regulationMark: "E",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card
