import { Card } from '../../../interfaces'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		en: "Magmortar",
		fr: "Maganon",
		de: "Magbrant"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		467,
	],

	hp: 110,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Magmar",
		fr: "Magmar"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hard Crush",
				fr: "Écras'dur",
				de: "Heftiger Zermalmer"
			},
			effect: {
				en: "Discard the top 3 cards from your deck. This attack does 50 damage times the number of Energy cards you discarded.",
				fr: "Défaussez les 3 cartes du dessus de votre deck. Cette attaque inflige 50 dégâts multipliés par le nombre de cartes Énergie que vous avez défaussées.",
				de: "Lege die obersten 3 Karten deines Decks auf deinen Ablagestapel. Dieser Angriff fügt 50 Schadenspunkte mal der Anzahl abgelegter Energiekarten zu."
			},
			damage: "50x",

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Mantle Bazooka",
				fr: "Bazoocape",
				de: "Verhüllte Panzerfaust"
			},
			effect: {
				en: "Discard 2 Fire Energy attached to Magmortar.",
				fr: "Défaussez 2 cartes Énergie  attachées à Maganon.",
				de: "Lege 2 an Magbrant angelgte -Energien auf deinen Ablagestapel."
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 279659,
		tcgplayer: 87061
	}
}

export default card
