import { Card } from '../../../interfaces'
import Set from '../Holon Phantoms'

const card: Card = {
	name: {
		en: "Mewtwo Star",
		fr: "Mewtwo ☆",
		de: "Mewtu *"
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
				en: "Energy Absorption",
				fr: "Absorption d'énergie",
				de: "Energieaufnahme"
			},
			effect: {
				en: "Search your discard pile for an Energy card and attach it to Mewtwo Star.",
				fr: "Choisissez dans votre pile de défausse une carte Énergie et attachez-la à Mewtwo .",
				de: "Durchsuche deinen Ablagestapel nach 1 Energiekarte und lege sie an Mewtu ☆ an."
			},

		},
		{
			cost: [
				"Fire",
				"Lightning",
				"Psychic",
			],
			name: {
				en: "Psychic Star",
				fr: "Étoile psy",
				de: "Psychostern"
			},
			effect: {
				en: "If the Defending Pokémon is an Evolved Pokémon, discard all Energy attached to Mewtwo Star and this attack does 50 damage plus 50 more damage.",
				fr: "Si le Pokémon Défenseur est un Pokémon Évolué, défaussez les Énergies attachées à Mewtwo  et cette attaque inflige 50 dégâts plus 50 dégâts supplémentaires.",
				de: "Wenn das Verteidigende Pokémon ein entwickeltes Pokémon ist, lege alle an Energiekarten, die an Mewtu ☆ angelegt sind, auf den Ablagestapel und dieser Angriff fügt 50 Schadenspunkte plus 50 weitere Schadenspunkte zu."
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
		tcgplayer: 87427
	},

	variants: [
		{
			type: "holo"
		},
	]
}

export default card
