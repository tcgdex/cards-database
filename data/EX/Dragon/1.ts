import { Card } from '../../../interfaces'
import Set from '../Dragon'

const card: Card = {
	name: {
		en: "Absol",
		fr: "Absol",
		de: "Absol"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		359,
	],

	hp: 70,

	types: [
		"Darkness",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Bad News",
				fr: "Mauvaises nouvelles",
				de: "Bad News"
			},
			effect: {
				en: "If the number of cards in your opponent's hand is at least 6, choose a number of cards there, without looking, until your opponent has 5 cards left. Have your opponent discard the cards you chose.",
				fr: "Si votre adversaire a au moins six cartes en main, choisissez sans regarder suffisamment de cartes pour qu'il ne lui reste plus que cinq cartes. Votre adversaire défausse les cartes que vous avez choisi.",
				de: "If the number of cards in your opponent's hand is at least 6, choose a number of cards there, without looking, until your opponent has 5 cards left. Have your opponent discard the cards you chose."
			},

		},
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Prize Count",
				fr: "Compteur de Récompense",
				de: "Prize Count"
			},
			effect: {
				en: "If you have more Prize cards left than your opponent, this attack does 20 damage plus 20 more damage.",
				fr: "S'il vous reste plus de cartes Récompense que votre adversaire, cette attaque inflige 40 dégâts.",
				de: "If you have more Prize cards left than your opponent, this attack does 20 damage plus 20 more damage."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],


	retreat: 1,

	thirdParty: {
		tcgplayer: 83449,
		cardmarket: 275878
	}
}

export default card
