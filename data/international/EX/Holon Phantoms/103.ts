import { Card } from 'models/database/card'
import Set from '../Holon Phantoms'

const card: Card = {
	name: {
		'en-us': "Mewtwo Star",
		'fr-fr': "Mewtwo ☆",
		'de-de': "Mewtu *"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		150,
	],

	hp: 80,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Energy Absorption",
				'fr-fr': "Absorption d'énergie",
				'de-de': "Energieaufnahme"
			},
			effect: {
				'en-us': "Search your discard pile for an Energy card and attach it to Mewtwo Star.",
				'fr-fr': "Choisissez dans votre pile de défausse une carte Énergie et attachez-la à Mewtwo .",
				'de-de': "Durchsuche deinen Ablagestapel nach 1 Energiekarte und lege sie an Mewtu ☆ an."
			},

		},
		{
			cost: [
				"Fire",
				"Lightning",
				"Psychic",
			],
			name: {
				'en-us': "Psychic Star",
				'fr-fr': "Étoile psy",
				'de-de': "Psychostern"
			},
			effect: {
				'en-us': "If the Defending Pokémon is an Evolved Pokémon, discard all Energy attached to Mewtwo Star and this attack does 50 damage plus 50 more damage.",
				'fr-fr': "Si le Pokémon Défenseur est un Pokémon Évolué, défaussez les Énergies attachées à Mewtwo  et cette attaque inflige 50 dégâts plus 50 dégâts supplémentaires.",
				'de-de': "Wenn das Verteidigende Pokémon ein entwickeltes Pokémon ist, lege alle an Energiekarten, die an Mewtu ☆ angelegt sind, auf den Ablagestapel und dieser Angriff fügt 50 Schadenspunkte plus 50 weitere Schadenspunkte zu."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 277081,
		tcgplayer: 87427
	},

	variants: [
		{
			type: "holo"
		},
	]
}

export default card
