import { Card } from '../../../interfaces'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		en: "Pokémon Communication",
		fr: "Communication Pokémon",
		de: "Pokémon-Kommunikation"
	},

	illustrator: "Takashi Yamaguchi",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Choisissez un Pokémon dans votre main, montrez-le à votre opposant et placez-le sur le dessus de votre deck. Dans ce cas, cherchez un Pokémon dans votre deck, montrez-le à votre adversaire, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
		en: "Choose 1 Pokémon in your hand, show it to your opponent, and put it on top of your deck. If you do, search your deck for a Pokémon, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
		de: "Wähle 1 Pokémon-Karte von deiner Hand, zeige sie deinem Gegner und lege sie auf dein Deck. Wenn du das machst, durchsuche dein Deck nach 1 Pokémon-Karte, zeige sie deinem Gegner und nimm sie auf die Hand. Mische anschließend dein Deck."
	},

	trainerType: "Item",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	hp: 0,

	thirdParty: {
		cardmarket: 279070
	}
}

export default card
