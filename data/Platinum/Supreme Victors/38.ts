import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Parasect",
		fr: "Parasect",
		de: "Parasek"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		47,
	],

	hp: 80,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Paras",
		fr: "Paras",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Nutritional Support",
				fr: "Support nutritionnel",
				de: "Nahrungsversorgung"
			},
			effect: {
				en: "Search your deck for up to 2 Grass Energy cards and attach them to any of your Pokémon in any way you like. Shuffle your deck afterward.",
				fr: "Choisissez dans votre deck jusqu'à 2 cartes Énergie Grass et attachez-les à n'importe lequel de vos Pokémon de la façon que vous voulez. Ensuite, mélangez votre deck.",
				de: "Durchsuche dein Deck nach bis zu 2 -Energiekarten und lege sie in beliebiger Verteilung an deine Pokémon an. Mische dein Deck danach."
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Hibernation Spore",
				fr: "Spore d'hibernation",
				de: "Winterschlafsporen"
			},
			effect: {
				en: "The Defending Pokémon is now Asleep. Flip 2 coins instead of 1 between turns. If either of them is tails, the Defending Pokémon is still Asleep.",
				fr: "Le Pokémon Défenseur est maintenant Endormi. Lancez 2 pièces au lieu d'1 entre deux tours. Si l'une d'elles est pile, le Pokémon Défenseur reste Endormi.",
				de: "Das Verteidigende Pokémon schläft jetzt. Wirf zwischen den Zügen 2 Münzen anstelle von 1 Münze. Wenn mindestens eine Münze \"Zahl\" gezeigt hat, schläft das Verteidigende Pokémon weiter."
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

	thirdParty: {
		cardmarket: 278729
	}
}

export default card
