import { Card } from '../../../interfaces'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		en: "Mawile",
		de: "Flunkifer"
	},

	illustrator: "TOKIYA",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		303,
	],

	hp: 60,

	types: [
		"Metal",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Selfish Draw",
				de: "Ego-Zug"
			},
			effect: {
				en: "Look at the top card of your deck. You may put it into your hand. If not, discard it and draw a card.",
				de: "Schau dir die oberste Karte deines Decks an. Du darfst sie auf die Hand nehmen. Wenn du das nicht tust, lege sie auf deinen Ablagestapel und ziehe eine Karte."
			},

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Destructive Jaw",
				de: "Zerstörermaul"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed and discard an Energy attached to the Defending Pokémon.",
				de: "Wirf eine Münze. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt gelähmt und lege eine Energiekarte, die am Verteidigenden Pokémon angelegt ist, auf den Ablagestapel deines Gegners."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	thirdParty: {
		cardmarket: 279707
	}
}

export default card
