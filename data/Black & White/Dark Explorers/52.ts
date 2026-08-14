import { Card } from '../../../interfaces'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		en: "Cofagrigus",
		fr: "Tutankafer",
		es: "Cofagrigus",
		it: "Cofagrigus",
		pt: "Cofagrigus",
		de: "Echnatoll"
	},

	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		563,
	],

	hp: 100,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Yamask",
		fr: "Tutafeh",
		de: "Makabaja"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Chuck",
				fr: "Bazardage",
				de: "Wurf"
			},
			effect: {
				en: "Discard as many Pokémon Tool cards as you like from your hand. This attack does 40 damage times the number of cards you discarded.",
				fr: "Défaussez autant de cartes Outil Pokémon que vous voulez de votre main. Cette attaque inflige 40 dégâts multipliés par le nombre de cartes que vous avez défaussées.",
				de: "Lege beliebig viele Pokémon-Ausrüstungen von deiner Hand auf deinen Ablagestapel. Dieser Angriff fügt 40 Schadenspunkte mal der Anzahl der von dir abgelegten Karten zu."
			},
			damage: 40,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Lock Up",
				fr: "Cage",
				de: "Einsperren"
			},
			effect: {
				en: "The Defending Pokémon can't retreat during your opponent's next turn.",
				fr: "Le Pokémon Défenseur ne peut pas battre en retraite durant le prochain tour de votre adversaire.",
				de: "Das Verteidigende Pokémon kann sich während des nächsten Zuges deines Gegners nicht zurückziehen."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		en: "It has been said that they swallow those who get too close and turn them into mummies. They like to eat gold nuggets.",
		de: "Angeblich verschlingt es jeden, der sich ihm auch nur nähert. Besonders gern frisst es Klumpen aus reinem Gold."
	},

	thirdParty: {
		cardmarket: 280380,
		tcgplayer: 84386
	}
}

export default card
