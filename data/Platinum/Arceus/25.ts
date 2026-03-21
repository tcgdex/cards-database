import { Card } from '../../../interfaces'
import Set from '../Arceus'

const card: Card = {
	name: {
		en: "Pichu",
		de: "Pichu"
	},

	illustrator: "Kanako Eo",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		172,
	],
	
	hp: 50,

	types: [
		"Lightning",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Baby Evolution",
				de: "Baby Evolution"
			},
			effect: {
				en: "Once during your turn (before your attack), you may put Pikachu from your hand onto Pichu (this counts as evolving Pichu) and remove all damage counters from Pichu.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du Pikachu von deiner Hand auf Pichu legen (das zählt als Entwickeln von Pichu). Entferne alle Schadensmarken von Pichu."
			},
		},
	],

	attacks: [
		{

			name: {
				en: "Baby Steps",
				de: "Babyschritte"
			},
			effect: {
				en: "Look at the top 5 cards of your deck, choose 1 of them, and put it into your hand. Shuffle the other cards back into your deck.",
				de: "Schau dir die obersten 5 Karten deines Decks an, wähle 1 von ihnen und nimm sie auf die Hand. Mische die anderen Karten in dein Deck zurück."
			},

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+10"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 278897,
		tcgplayer: 88021
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse",
		}
	]
}

export default card
