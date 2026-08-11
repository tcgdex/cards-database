import { Card } from 'models/database/card'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		'en-us': "Tangela",
		'fr-fr': "Saquedeneu",
		'de-de': "Tangela"
	},

	illustrator: "Yuka Morii",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		114,
	],

	hp: 60,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Vine Tease",
				'fr-fr': "Liane taquine",
				'de-de': "Stichelnde Ranke"
			},
			effect: {
				'en-us': "Look at your Prize cards without showing your opponent. Choose 1 of the Prize cards and switch it with the top card of your deck without looking at the top card of your deck. If you have no cards in your deck, this attack does nothing.",
				'fr-fr': "Regardez vos cartes Récompense sans les montrer à votre adversaire. Choisissez-en 1 et échangez-la avec la carte se trouvant sur le dessus de votre deck, sans regarder cette carte. Si vous n'avez pas de cartes dans votre deck, cette attaque est sans effet.",
				'de-de': "Schau dir deine Preiskarten an, ohne sie deinem Gegner zu zeigen. Wähle 1 deiner Preiskarten und tausche sie gegen die oberste Karte (ohne sie dir anzuschauen) deines Decks aus. Wenn du keine Karte mehr in deinem Deck hast, hat dieser Angriff keine Ausiwrkung."
			},

		},
		{
			name: {
				'en-us': "Wiggle",
				'fr-fr': "Agitation",
				'de-de': "Winde"
			},

			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Confused. If tails, the Defending Pokémon is now Poisoned.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus. Si c'est pile, le Pokémon Défenseur est maintenant Empoisonné.",
				'de-de': "Wirf 1 Münze. bei \"Kopf\" ist das Verteidigende Pokémon jetzt verwirrt. Bei \"Zahl\" ist das verteidigende Pokémon jetzt vergiftet."
			},

			cost: ["Grass"]
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
			type: "Water",
			value: "-30"
		},
	],


	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 276206,
				tcgplayer: 89742
			},
		},
		{
			type: "reverse",
			foil: "energy",
			thirdParty: {
				cardmarket: 276206,
				tcgplayer: 89742
			},
		}
	]
}

export default card
