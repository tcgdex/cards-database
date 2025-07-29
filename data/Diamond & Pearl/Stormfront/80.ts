import { Card } from '../../../interfaces'
import Set from '../Stormfront'

const card: Card = {
	name: {
		en: "Voltorb",
		fr: "Voltorbe",
		de: "Voltobal"
	},

	illustrator: "Kent Kanetsuna",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		100,
	],

	hp: 60,

	types: [
		"Lightning",
	],

	evolveFrom: {
		fr: "Voltorbe",
	},

	stage: "Basic",

	attacks: [
		{

			name: {
				en: "Screech",
				fr: "Voix stridente",
				de: "Kreideschrei"
			},
			effect: {
				en: "If an attack does damage to the Defending Pokémon (after applying Weakness and Resistance), that attack does 20 more damage to that Pokémon until the end of your next turn.",
				fr: "Si une attaque inflige des dégâts au Pokémon Défenseur (après application de la Faiblesse et de la Résistance), cette attaque lui inflige 20 dégâts supplémentaires jusqu'à la fin de votre prochain tour.",
				de: "Wenn bis zum Ende deines nächsten Zuges ein Angriff dem Verteidigenden Pokémon Schaden zufügt (nachdem Schwäche und Resistenz verrechnet wurden), fügt dieser Angriff diesem Pokémon 20 weitere Schadenspunkte zu."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Double Spin",
				fr: "Double tour",
				de: "Doppeldreher"
			},
			effect: {
				en: "Flip 2 coins. This attack does 10 damage times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de faces.",
				de: "Wirf 2 Münzen. Dieser Angriff fügt 10 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "10x",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+10"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		fr: "Il ressemble à une Poké Ball. Ce Pokémon dangereux peut exploser ou s'électrifier au toucher."
	},

	thirdParty: {
		cardmarket: 278296
	}
}

export default card
