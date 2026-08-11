import { Card } from 'models/database/card'
import Set from '../Stormfront'

const card: Card = {
	name: {
		'en-us': "Drapion",
		'fr-fr': "Drascore",
		'de-de': "Piondragi"
	},

	illustrator: "Kent Kanetsuna",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		452,
	],

	hp: 110,

	types: [
		"Darkness",
	],

	evolveFrom: {
		'en-us': "Skorupi",
		'fr-fr': "Rapion",
	},

	stage: "Stage1",

	attacks: [
		{

			name: {
				'en-us': "Scorpion Grapple",
				'fr-fr': "Lutte scorpion",
				'de-de': "Skorpionkralle"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed. If tails, the Defending Pokémon can't retreat during your opponent's next turn.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé. Si c'est pile, le Pokémon Défenseur ne peut pas battre en retraite lors du prochain tour de votre adversaire.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt gelähmt. Bei \"Zahl\" kann sich das Verteidigende Pokémon im nächsten Zug deines Gegners nicht zurückziehen."
			},
			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Cross Poison",
				'fr-fr': "Poison-croix",
				'de-de': "Giftstreich"
			},
			effect: {
				'en-us': "Flip 4 coins. This attack does 20 damage times the number of heads. If 2 or more of them are heads, the Defending Pokémon is now Poisoned.",
				'fr-fr': "Lancez 4 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de faces. Si vous obtenez au moins 2 faces, le Pokémon Défenseur est maintenant Empoisonné.",
				'de-de': "Wirf 4 Münzen. Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl \"Kopf\" zu. Bei mindestens 2 Mal \"Kopf\" ist das Verteidigende Pokémon jetzt vergiftet."
			},
			damage: "20x",

		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
			],
			name: {
				'en-us': "Derail",
				'fr-fr': "Dérailler",
				'de-de': "Entgleisen"
			},
			effect: {
				'en-us': "Discard all Special Energy cards attached to the Defending Pokémon.",
				'fr-fr': "Défaussez toutes les cartes Énergie Spéciale attachées au Pokémon Défenseur.",
				'de-de': "Lege alle Spezialenergiekarten, die am Verteidigenden Pokémon angelegt sind, auf den Ablagestapel deines Gegners."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+20"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 278313,
		tcgplayer: 84923
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
