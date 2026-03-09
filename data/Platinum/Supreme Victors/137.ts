import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Cyrus's Initiative",
		fr: "L'initiative d'Hélio",
		de: "Zyrus' Entschlusskraft"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Vous ne pouvez jouer qu'une seule carte Supporter par tour. Lorsque vous la jouez, placez-la à côté de votre Pokémon Actif. À la fin du tour, défaussez-la.",
		de: "Wirf 2 Münzen. Wenn eine oder beide Münzen \"Zahl\" gezeigt haben, schau dir die Handkarten deines Gegners an. Wähle pro \"Kopf\" 1 Karte aus der Hand deines Gegners und lege sie in beliebiger Reihenfolge unter das Deck deines Gegners."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 278828
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "reverse"
		}
	]
}

export default card
