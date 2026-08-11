import { Card } from 'models/database/card'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		'en-us': "Leafeon",
		'fr-fr': "Phyllali",
		'de-de': "Folipurba"
	},

	illustrator: "match",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [470],

	hp: 90,

	types: [
		"Grass"
	],

	evolveFrom: {
		'en-us': "Eevee",
		'fr-fr': "Évoli"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Miasma Wind",
				'fr-fr': "Vent miasme",
				'de-de': "Miasma"
			},
			effect: {
				'en-us': "Does 50 damage times the number of Special Conditions affecting the Defending Pokémon.",
				'fr-fr': "Inflige 50 dégâts multipliés par le nombre d'États Spéciaux affectant le Pokémon Défenseur.",
				'de-de': "Dieser Angriff fügt 50 Schadenspunkte mal der Anzahl der Speziellen Zustände, von dem das Verteidigende Pokémon betroffen ist, zu."
			},
			damage: "50×",

		},
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Sooting Scent",
				'fr-fr': "Senteur apaisante",
				'de-de': "Beruhigender Duft"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Endormi.",
				'de-de': "Das Verteidigende Pokémon schläft jetzt."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],
	retreat: 1,


	description: {
		'en-us': "When you see Leafeon asleep in a patch of sunshine, you'll know it is using photosynthesis to produce clean air.",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 86681,
				cardmarket: 279656
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 86681,
				cardmarket: 279656
			},
		},
	],

}

export default card
