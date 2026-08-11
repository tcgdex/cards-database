import { Card } from 'models/database/card'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		'en-us': "Lucario",
		'fr-fr': "Lucario",
		'de-de': "Lucario"
	},

	illustrator: "Takashi Yamaguchi",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [448],

	hp: 90,

	types: [
		"Fighting"
	],

	evolveFrom: {
		'en-us': "Riolu",
		'fr-fr': "Riolu",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Dimension Sphere",
				'fr-fr': "Sphère dimensionnelle",
				'de-de': "Dimensiossphäre"
			},
			effect: {
				'en-us': "Does 30 damage plus 20 more damage for each of your Pokémon in the Lost Zone.",
				'fr-fr': "Inflige 30 dégâts plus 20 dégâts supplémentaires pour chacun de vos Pokémon se trouvant dans la Zone Perdue.",
				'de-de': "Dieser Angriff fügt 30 Schadenspunkte plus 20 weitere Schadenspunkte für jedes deiner Pokémon im Nirgendwo zu."
			},
			damage: "30+",

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Sky Uppercut",
				'fr-fr': "Stratopercut",
				'de-de': "Himmelhieb"
			},
			effect: {
				'en-us': "This attack's damage isn't affected by Resistance.",
				'fr-fr': "Les dégâts infligés par cette attaque ne sont pas affectés par la Résistance.",
				'de-de': "Der Schaden dieses Angrffs wird durch Resistenz nicht verändert."
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "x2"
		},
	],
	retreat: 1,

	description: {
		'en-us': "It's said that no foe can remain invisible to Lucario, since it can detect auras. Even foes it could not otherwise see.",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 86881,
				cardmarket: 279657
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 86881,
				cardmarket: 279657
			},
		},
	],

}

export default card
