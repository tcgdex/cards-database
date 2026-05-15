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
		en: "You can play only one Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card. Flip 2 coins. If either of them is heads, look at your opponent's hand. For each heads, choose 1 card from your opponent's hand and put it on the bottom of your opponent's deck in any order.",
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
