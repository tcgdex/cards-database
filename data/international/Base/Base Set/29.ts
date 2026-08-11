import { Card } from 'models/database/card'
import Set from '../Base Set'

const card: Card = {
	name: {
		'en-us': "Haunter",
		'fr-fr': "Spectrum",
		'de-de': "Alpollo",
		'it-it': "Haunter"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		93,
	],

	hp: 60,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Gastly",
		'fr-fr': "Fantominus",
		'it-it': "Gastly"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Hypnosis",
				'fr-fr': "Hypnose",
				'de-de': "Hypnose",
				'it-it': "Ipnosi"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Endormi.",
				'de-de': "Das verteidigende Pokémon schläft jetzt.",
				'it-it': "Il Pokémon Difensore è Addormentato."
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				'en-us': "Dream Eater",
				'fr-fr': "Dévorêve",
				'de-de': "Traumfresser",
				'it-it': "Mangiasogni"
			},
			effect: {
				'en-us': "You can't this attack unless the Defending Pokémon is Asleep.",
				'fr-fr': "Vous ne pouvez utiliser cette attaque que si le Pokémon Défenseur est Endormi.",
				'de-de': "Du kannst diesen Angriff nur einsetzen, wenn das verteidigende Pokémon schlafend ist.",
				'it-it': "Puoi usare questo attacco solo se il Pokémon Difensore è Addormentato."
			},
			damage: 50,

		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],
	retreat: 1,


	description: {
		'en-us': "Because of its ability to slip through block walls, it is said to be from another dimension.",
		'fr-fr': "Il peut se glisser à travers les murs comme une créature d'une autre dimension.",
		'it-it': "Per la sua abilità di passare attraverso i muri, si dice che venga da un'altra dimensione."
	},

	variants: [
		{
			type: "normal",
			subtype: "unlimited",
			thirdParty: {
				cardmarket: 273724,
				tcgplayer: 42370
			},
		},
		{
			type: "normal",
			subtype: "shadowless",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 107026
			},
		},
		{
			type: "normal",
			subtype: "shadowless",
			thirdParty: {
				tcgplayer: 107026
			},
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright",
		}
	],
}

export default card
