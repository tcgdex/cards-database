import { Card } from '../../../interfaces'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		en: "Pokégear3.0",
		fr: "Poké Gear3.0",
		de: "Pokécom 3.0"
	},

	illustrator: "Noriko Hotta",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Regardez les 7 cartes du dessus de votre deck. Choisissez l’une des cartes Supporter qui s’y trouve, montrez-la à votre adversaire et placez-la dans votre main. Mélangez les autres cartes dans votre deck.",
		en: "Look at the top 7 cards of your deck. Choose a Supporter card you find there, show it to your opponent, and put it into your hand. Shuffle the other cards back into your deck.",
		de: "Schau dir die obersten 7 Karten deines Decks an. Falls Unterstützungskarten darunter sind, wähle eine davon, zeige sie deinem Gegner und nimm sie auf die Hand. Mische die anderen Karten anschließend in dein Deck."
	},

	trainerType: "Item",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	hp: 0
}

export default card
