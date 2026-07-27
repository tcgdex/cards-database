import { Card } from '../../../interfaces'
import Set from '../Arceus'

const card: Card = {
	name: {
		en: "Department Store Girl",
		de: "Kaufhausmädchen"
	},

	illustrator: "Kanako Eo",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "You can play only one Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card. Search your deck for up to 3 Pokémon Tool cards, show them to your opponent, and put them into your hand. Shuffle your deck afterward.",
		de: "Durchsuche dein Deck nach bis zu 3 Pokémon-Ausrüstungs-Karten, zeige sie deinem Gegner und nimm sie auf die Hand. Mische dein Deck danach."
	},

	trainerType: "Supporter",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84780,
				cardmarket: 278957
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278957,
				tcgplayer: 84780
			}
		},
	],

	retreat: 0
}

export default card
