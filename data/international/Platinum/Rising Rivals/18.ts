import { Card } from 'models/database/card'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		'en-us': "Espeon E4",
		'fr-fr': "Mentali  Niv. 55",
		'de-de': "Psiana 4"
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [196],
	hp: 80,
	types: [
		"Psychic"
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Hypnosis",
				'fr-fr': "Hypnose",
				'de-de': "Hypnose"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Endormi.",
				'de-de': "Das Verteidigende Pokémon schläft jetzt."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Psywave",
				'fr-fr': "Vague psy",
				'de-de': "Psywelle"
			},
			effect: {
				'en-us': "Does 20 damage plus 10 more damage for each Energy attached to the Defending Pokémon.",
				'fr-fr': "Inflige 20 dégâts plus 10 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Défenseur.",
				'de-de': "Dieser Angriff fügt 20 Schadenspunkte plus 10 weitere Schadenspunkte für jede Energie, die am Verteidigenden Pokémon angelegt ist, zu."
			},
			damage: "20+",

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "x2"
		},
	],
	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 278592,
				tcgplayer: 85330
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278592,
				tcgplayer: 85330
			}
		},
	],

}

export default card
