import { Card } from '../../../interfaces'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		en: "Cleffa",
		de: "Pii"
	},
	illustrator: "sui",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		173,
	],
	hp: 30,
	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Sweet Sleeping Face",
				de: "Niedliches Schlafgesicht"
			},
			effect: {
				en: "As long as Cleffa is Asleep, prevent all damage done to Cleffa by attacks.",
				de: "Solange Pii schläft, verhindere allen Schaden, der Pii durch Angriffe zugefügt wird."
			},
		},
	],
	attacks: [
		{

			name: {
				en: "Eeeeeeek",
				de: "Piiiiiiieps"
			},
			effect: {
				en: "Shuffle your hand into your deck, then draw 6 cards. Cleffa is now Asleep.",
				de: "Mische deine Handkarten in dein Deck, ziehe danach 6 Karten. Pii schläft jetzt."
			},

		},
	],






}

export default card
