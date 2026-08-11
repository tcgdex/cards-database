import { Card } from 'models/database/card'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		'en-us': "Parasect",
		'fr-fr': "Parasect",
		'de-de': "Parasek"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [47],

	hp: 80,

	types: [
		"Grass"
	],

	evolveFrom: {
		'en-us': "Paras",
		'fr-fr': "Paras"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Nutritional Support",
				'fr-fr': "Support nutritionnel",
				'de-de': "Nahrungsversorgung"
			},
			effect: {
				'en-us': "Search your deck for up to 2 Grass Energy cards and attach them to any of your Pokémon in any way you like. Shuffle your deck afterward.",
				'fr-fr': "Choisissez dans votre deck jusqu'à 2 cartes Énergie Grass et attachez-les à n'importe lequel de vos Pokémon de la façon que vous voulez. Ensuite, mélangez votre deck.",
				'de-de': "Durchsuche dein Deck nach bis zu 2 -Energiekarten und lege sie in beliebiger Verteilung an deine Pokémon an. Mische dein Deck danach."
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Hibernation Spore",
				'fr-fr': "Spore d'hibernation",
				'de-de': "Winterschlafsporen"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Asleep. Flip 2 coins instead of 1 between turns. If either of them is tails, the Defending Pokémon is still Asleep.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Endormi. Lancez 2 pièces au lieu d'1 entre deux tours. Si l'une d'elles est pile, le Pokémon Défenseur reste Endormi.",
				'de-de': "Das Verteidigende Pokémon schläft jetzt. Wirf zwischen den Zügen 2 Münzen anstelle von 1 Münze. Wenn mindestens eine Münze \"Zahl\" gezeigt hat, schläft das Verteidigende Pokémon weiter."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],
	retreat: 1,

	description: {
		'en-us': "A mushroom grown larger than the host's body controls Parasect. It scatters poisonous spores."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87959,
				cardmarket: 278729
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278729,
				tcgplayer: 87959
			}
		},
	],

}

export default card
