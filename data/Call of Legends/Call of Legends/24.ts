import { Card } from '../../../interfaces'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		en: "Cleffa",
		fr: "Mélo",
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
				fr: "Joli visage endormi",
				de: "Niedliches Schlafgesicht"
			},
			effect: {
				en: "As long as Cleffa is Asleep, prevent all damage done to Cleffa by attacks.",
				fr: "Tant que Mélo reste Endormi, prévenez tous les dégâts qui peuvent lui être infligés par des attaques.",
				de: "Solange Pii schläft, verhindere allen Schaden, der Pii durch Angriffe zugefügt wird."
			},
		},
	],

	attacks: [
		{

			name: {
				en: "Eeeeeeek",
				fr: "Arheuuuuu",
				de: "Piiiiiiieps"
			},
			effect: {
				en: "Shuffle your hand into your deck, then draw 6 cards. Cleffa is now Asleep.",
				fr: "Mélangez votre main avec votre deck, piochez ensuite 6 cartes. Mélo est maintenant Endormi.",
				de: "Mische deine Handkarten in dein Deck, ziehe danach 6 Karten. Pii schläft jetzt."
			},

		},
	],

	thirdParty: {
		cardmarket: 279667,
		tcgplayer: 84369
	}
}

export default card
