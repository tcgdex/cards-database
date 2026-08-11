import { Card } from 'models/database/card'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		'en-us': "Unown",
		'fr-fr': "Zarbi",
		'de-de': "Icognito"
	},

	illustrator: "Hideaki Hakozaki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [201],

	hp: 50,

	types: [
		"Psychic"
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "FLASH",
				'fr-fr': "FLASH",
				'de-de': "FLASH"
			},
			effect: {
				'en-us': "Once during your turn, when you put Unown from your hand onto your Bench, you may look at the top 5 cards of your deck and put them back on top of your deck in any order.",
				'fr-fr': "Une seule fois pendant votre tour, lorsque vous prenez Zarbi dans votre main et le placez sur votre Banc, vous pouvez regarder les 5 cartes du dessus de votre deck et les y replacer dans l’ordre de votre choix.",
				'de-de': "Einmal während deines Zuges kannst du, wenn du Icognito von deiner Hand auf deine Bank legst, dir die obersten 5 Karten deines Decks anschauen und sie in beliebiger Reihenfolge auf dein Deck zurücklegen."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Hidden Power",
				'fr-fr': "Puissance cachée",
				'de-de': "Kraftreserve"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Its flat, thin body is always stuck on walls. Its shape appears to have some meaning."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 90163,
				cardmarket: 279026
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 90163,
				cardmarket: 279026
			}
		},
	],

}

export default card
