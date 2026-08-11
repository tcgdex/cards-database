import { Card } from 'models/database/card'
import Set from '../Triumphant'

const card: Card = {
	name: {
		'en-us': "Ambipom",
		'fr-fr': "Capidextre",
		'de-de': "Ambidiffel"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [424],

	hp: 80,

	types: [
		"Colorless"
	],

	evolveFrom: {
		'en-us': "Aipom",
		'fr-fr': "Capumain"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Astonish",
				'fr-fr': "Étonnement",
				'de-de': "Erstauner"
			},
			effect: {
				'en-us': "Choose 2 cards from your opponent's hand without looking. Look at the cards you chose, then have your opponent shuffle those cards into his or her deck.",
				'fr-fr': "Choisissez au hasard 2 cartes dans la main de votre adversaire. Regardez les cartes que vous avez choisies, puis demandez à votre adversaire de les mélanger avec son deck.",
				'de-de': "Wähle 2 Karten von der Hand deines Gegners (ohne sie vorher anzusehen). Schau dir die gewählten Karten an, danach mischt dein Gegner sie in sein Deck zurück."
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Tail Spank",
				'fr-fr': "Matraqueue",
				'de-de': "Schweifklapser"
			},
			effect: {
				'en-us': "Discard 2 cards from your hand. (If you can't discard 2 cards from your hand, this attack does nothing.)",
				'fr-fr': "Défaussez 2 cartes de votre main. (Si vous ne pouvez pas, cette attaque ne fait rien.)",
				'de-de': "Lege 2 Karten von deiner Hand auf deinen Ablagestapel. (Wenn du keine 2 Karten von der Hand auf deinen Ablagestapel legen kannst, hat dieser Angriff keine Auswirkungen.)"
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "They live on large trees. They are said to communicate by connecting their tails to those of others."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 83528,
				cardmarket: 279543
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 279543,
				tcgplayer: 83528
			}
		},
	],

}

export default card
